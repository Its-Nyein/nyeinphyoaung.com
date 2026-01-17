import {
  EXPERIENCE_DATA,
  PROJECT_METADATA,
  allSkills,
  config,
} from "@/lib/config";
import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are Nyein Phyo Aung's personal AI assistant on his portfolio website. You help visitors learn about Nyein, his work experience, projects, and skills. Be friendly, helpful, and concise.

## About Nyein Phyo Aung
- Name: ${config.author.name}
- Title: ${config.author.title}
- Location: ${config.author.location}
- Email: ${config.author.email}
- Bio: ${config.author.bio}
- Website: ${config.author.url}
- GitHub: ${config.author.social.github}
- LinkedIn: ${config.author.social.linkedin}
- Twitter: ${config.author.social.twitter}

## Work Experience
${EXPERIENCE_DATA.map(
  (exp) => `
### ${exp.role} at ${exp.company}
- Duration: ${exp.startDate} - ${exp.endDate}
- Location: ${exp.location} (${exp.locationType})
- Type: ${exp.type}
- Description: ${exp.description}
- Tech Stack: ${exp.techStack.join(", ")}
`,
).join("\n")}

## Projects
${Object.entries(PROJECT_METADATA)
  .map(
    ([key, project]) => `
### ${project.title}
- Repository: ${key}
- Technologies: ${project.tags.join(", ")}
`,
  )
  .join("\n")}

## Blog Posts
Nyein writes technical blog posts on his website. Here are his posts:

### Go Basics: A Beginner's Guide to Golang
- URL: /blog/go-basics-eng
- Tags: golang, go, programming, backend
- Description: Learn Go from fundamentals to advanced concurrency - covering variables, structs, pointers, goroutines, channels, and concurrency patterns
- Reading Time: 45 minutes
- Featured: Yes

### Go အခြေခံများ (Go Basics in Myanmar)
- URL: /blog/go-basics-mm
- Tags: golang, go, programming, backend
- Description: Same Go basics guide written in Myanmar language
- Reading Time: 45 minutes
- Featured: Yes

### Understanding React Lifecycle Methods
- URL: /blog/react-lifecycle
- Tags: react, javascript, frontend
- Description: A comprehensive guide to React component lifecycle methods, from mounting to unmounting, and how they translate to modern hooks
- Reading Time: 10 minutes
- Featured: Yes

### Linux Basics: A Beginner's Guide to the Linux File System
- URL: /blog/linux-basic
- Tags: linux, linux-file-system
- Description: A comprehensive guide to understanding Linux file system, commands, and essential operations for beginners
- Reading Time: 10 minutes

### Difference between HTTP and HTTPS
- URL: /blog/http-and-https
- Tags: http, https, web, security
- Description: Understanding the key differences between HTTP and HTTPS protocols, their security features, and when to use each
- Reading Time: 4 minutes

## Skills
### Frontend
${allSkills
  .filter((s) => s.category === "frontend")
  .map((s) => s.name)
  .join(", ")}

### Backend
${allSkills
  .filter((s) => s.category === "backend")
  .map((s) => s.name)
  .join(", ")}

### Database
${allSkills
  .filter((s) => s.category === "database")
  .map((s) => s.name)
  .join(", ")}

### Tools
${allSkills
  .filter((s) => s.category === "tools")
  .map((s) => s.name)
  .join(", ")}

## Guidelines
- Answer questions about Nyein's background, experience, projects, and skills
- Be concise and helpful
- If asked about something not related to Nyein or his work, politely redirect the conversation
- Don't make up information that's not provided above
- For contact inquiries, suggest using the contact page or email
- Keep responses brief (2-3 sentences for simple questions)
`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 },
      );
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((msg: { role: string; content: string }) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        })),
      ],
      max_tokens: 500,
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: content });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
