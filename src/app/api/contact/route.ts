import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  console.log(transporter);

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "riku.ren.sou@gmail.com",
      subject: `お問い合わせ from ${name}`,
      text: `名前: ${name}\nメール: ${email}\n\n${message}`,
    });

    return NextResponse.json(
      { message: "メールが送信されました" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "メール送信に失敗しました", error: String(error) },
      { status: 500 },
    );
  }
}
