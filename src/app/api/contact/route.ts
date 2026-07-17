import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function normalizeInput(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeDisplayName(value: string) {
  return value.replace(/[<>"']/g, "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = normalizeInput(body.name);
    const email = normalizeInput(body.email);
    const message = normalizeInput(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill out all fields." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 4000) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const recipientEmail = process.env.CONTACT_TO_EMAIL;
    const sendConfirmationEmail = process.env.SEND_CONFIRMATION_EMAIL === "true";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    await transporter.verify();

    const displayName = sanitizeDisplayName(name);
    const normalizedMessage = message.replace(/\r\n/g, "\n");
    const visibleFrom = `${displayName} <${email}>`;

    const inboxMail = await transporter.sendMail({
      from: visibleFrom,
      sender: smtpFrom,
      to: recipientEmail,
      replyTo: email,
      subject: `New contact form message from ${displayName || "a visitor"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${normalizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New contact form message</h3>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(normalizedMessage).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (sendConfirmationEmail) {
      await transporter.sendMail({
        from: smtpFrom,
        to: email,
        replyTo: recipientEmail,
        subject: "We received your message",
        text: `Hi ${name},\n\nThanks for reaching out. We received your message and will get back to you shortly.\n\nYour message:\n${normalizedMessage}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h3>Thanks for reaching out</h3>
            <p>Hi ${escapeHtml(name)},</p>
            <p>We received your message and will get back to you shortly.</p>
            <p><strong>Your message:</strong></p>
            <p>${escapeHtml(normalizedMessage).replace(/\n/g, "<br />")}</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        messageId: inboxMail.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
