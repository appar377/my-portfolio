import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactFormEnabled } from "@/config/contact";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .max(100)
    .regex(/^[^\r\n]+$/),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  if (!contactFormEnabled) {
    return NextResponse.json(
      { message: "Enquiries are not available yet" },
      { status: 503 },
    );
  }
  const body = await req.json().catch(() => null);
  const enquiry = enquirySchema.safeParse(body);
  if (!enquiry.success)
    return NextResponse.json({ message: "Invalid enquiry" }, { status: 400 });

  const { GMAIL_USER, GMAIL_PASS, CONTACT_TO, CONTACT_FORM_ENABLED } =
    process.env;
  if (
    CONTACT_FORM_ENABLED !== "true" ||
    !GMAIL_USER ||
    !GMAIL_PASS ||
    !CONTACT_TO
  ) {
    return NextResponse.json(
      { message: "Enquiries are not available yet" },
      { status: 503 },
    );
  }
  const { name, email, message } = enquiry.data;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_PASS },
    });
    await transporter.sendMail({
      from: GMAIL_USER,
      replyTo: email,
      to: CONTACT_TO,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ message: "Enquiry received" });
  } catch {
    return NextResponse.json(
      { message: "Unable to send enquiry" },
      { status: 500 },
    );
  }
}
