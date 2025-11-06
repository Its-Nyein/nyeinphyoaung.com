import { contactSchema } from "@/lib/contact-schema";
import { EmailTemplate } from "@/templates/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmails = process.env.CONTACT_TO_EMAILS?.split(",");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: fromEmail!,
      to: toEmails!,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      replyTo: validatedData.email,
      react: EmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
