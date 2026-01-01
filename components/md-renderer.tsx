"use client";

import { cn } from "@/lib/utils";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { isValidElement, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-white/70" />
      )}
    </button>
  );
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        "markdown-content",
        "[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:leading-tight",
        "[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:leading-tight",
        "[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-4 [&>h3]:mb-2 [&>h3]:leading-tight",
        "[&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-white [&>h4]:mt-4 [&>h4]:mb-2",
        "[&>p]:text-white/80 [&>p]:leading-7 [&>p]:mb-4",
        "[&>p>a]:text-blue-400 [&>p>a]:no-underline hover:[&>p>a]:underline hover:[&>p>a]:text-blue-300",
        "[&>p>strong]:text-white [&>p>strong]:font-semibold",
        "[&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-white/80",
        "[&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>ol]:space-y-2 [&>ol>li]:text-white/80",
        "[&>blockquote]:border-l-4 [&>blockquote]:border-white/30 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-white/70 [&>blockquote]:my-4",
        "[&>div>pre]:bg-gray-900 [&>div>pre]:border [&>div>pre]:border-white/20 [&>div>pre]:rounded-lg [&>div>pre]:p-4 [&>div>pre]:overflow-x-auto [&>div>pre]:my-4",
        "[&>div>pre>code]:bg-transparent [&>div>pre>code]:p-0 [&>div>pre>code]:text-sm",
        "[&>p>code]:text-sm [&>p>code]:font-mono [&>p>code]:bg-white/10 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded [&>p>code]:text-white/90",
        "[&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-4 [&>img]:max-w-full",
        "[&>hr]:border-white/20 [&>hr]:my-6",
        "[&>table]:border-collapse [&>table]:border [&>table]:border-white/20 [&>table]:my-4 [&>table]:w-full",
        "[&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-white/20 [&>table>thead>tr>th]:bg-white/10 [&>table>thead>tr>th]:p-2 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold [&>table>thead>tr>th]:text-white",
        "[&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-white/20 [&>table>tbody>tr>td]:p-2 [&>table>tbody>tr>td]:text-white/80",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: ({ href, children, ...props }) => {
            const isExternal =
              href?.startsWith("http") || href?.startsWith("//");
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-blue-400 no-underline hover:underline hover:text-blue-300"
                {...props}
              >
                {children}
              </a>
            );
          },
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isCodeBlock = match !== null;
            return isCodeBlock ? (
              <code className={className} {...props}>
                {children}
              </code>
            ) : (
              <code
                className="text-sm font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/90"
                {...props}
              >
                {children}
              </code>
            );
          },
          h1: ({ children, ...props }) => (
            <h1
              className="text-3xl font-bold text-white mt-8 mb-4 leading-tight"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-2xl font-bold text-white mt-6 mb-3 leading-tight"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-xl font-bold text-white mt-4 mb-2 leading-tight"
              {...props}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              className="text-lg font-semibold text-white mt-4 mb-2"
              {...props}
            >
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="text-white/80 leading-7 mb-4" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc ml-6 mb-4 space-y-2" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal ml-6 mb-4 space-y-2" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-white/80" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-white/30 pl-4 italic text-white/70 my-4"
              {...props}
            >
              {children}
            </blockquote>
          ),
          img: ({ src, alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-md my-4 max-w-full"
              {...props}
            />
          ),
          pre: ({ children, ...props }) => {
            const getTextContent = (node: React.ReactNode): string => {
              if (typeof node === "string") return node;
              if (typeof node === "number") return String(node);
              if (Array.isArray(node)) return node.map(getTextContent).join("");
              if (isValidElement<{ children?: React.ReactNode }>(node)) {
                return getTextContent(node.props.children);
              }
              return "";
            };
            const code = getTextContent(children).trim();

            return (
              <div className="relative group">
                <CopyButton code={code} />
                <pre
                  className="bg-gray-900 border border-white/20 rounded-lg p-4 overflow-x-auto my-4"
                  {...props}
                >
                  {children}
                </pre>
              </div>
            );
          },
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table
                className="border-collapse border border-white/20 w-full"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead {...props}>{children}</thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody {...props}>{children}</tbody>
          ),
          tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
          th: ({ children, ...props }) => (
            <th
              className="border border-white/20 bg-white/10 p-2 text-left font-semibold text-white"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-white/20 p-2 text-white/80" {...props}>
              {children}
            </td>
          ),
          hr: ({ ...props }) => (
            <hr className="border-white/20 my-6" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
