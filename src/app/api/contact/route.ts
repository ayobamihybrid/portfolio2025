import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendWithResend(params: {
  name: string;
  email: string;
  project: string;
  toEmail: string;
  fromEmail: string;
  resendApiKey: string;
}) {
  const { name, email, project, toEmail, fromEmail, resendApiKey } = params;
  const subject = `Portfolio Contact from ${name}`;
  const text = [`Name: ${name}`, `Email: ${email}`, "", "Project details:", project].join("\n");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project);
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #0f172a;">
      <h2 style="margin: 0 0 12px;">New Portfolio Message</h2>
      <p style="margin: 0 0 6px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 6px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 14px 0 6px;"><strong>Project details:</strong></p>
      <p style="margin: 0; white-space: pre-wrap;">${safeProject}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    throw new Error(`Resend failed: ${resendError}`);
  }
}

async function sendWithSmtp(params: {
  name: string;
  email: string;
  project: string;
  toEmail: string;
  fromEmail: string;
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
}) {
  const { name, email, project, toEmail, fromEmail, host, port, secure, user, pass } = params;

  const smtpPackage = process.env.SMTP_PACKAGE_NAME ?? "nodemailer";
  const dynamicRequire = eval("require") as NodeRequire;
  // Lazy load so missing SMTP dependency does not break builds for Resend-only setups.
  const nodemailer = dynamicRequire(smtpPackage) as {
    createTransport: (config: {
      host: string;
      port: number;
      secure: boolean;
      auth: { user: string; pass: string };
    }) => { sendMail: (options: Record<string, unknown>) => Promise<unknown> };
  };

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject = `Portfolio Contact from ${name}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project);

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject,
    text: [`Name: ${name}`, `Email: ${email}`, "", "Project details:", project].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #0f172a;">
        <h2 style="margin: 0 0 12px;">New Portfolio Message</h2>
        <p style="margin: 0 0 6px;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin: 0 0 6px;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin: 14px 0 6px;"><strong>Project details:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${safeProject}</p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body?.name);
    const email = clean(body?.email);
    const project = clean(body?.project);

    if (!name || !email || !project) {
      return NextResponse.json({ error: "Name, email, and project are required." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (project.length < 10) {
      return NextResponse.json(
        { error: "Project description is too short. Add a bit more detail." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "balogunayobami2023@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";

    if (!fromEmail) {
      return NextResponse.json(
        { error: "Server email is missing CONTACT_FROM_EMAIL in environment variables." },
        { status: 500 }
      );
    }

    try {
      if (smtpHost && smtpPortRaw && smtpUser && smtpPass) {
        const smtpPort = Number(smtpPortRaw);
        if (!Number.isFinite(smtpPort)) {
          return NextResponse.json({ error: "SMTP_PORT must be a valid number." }, { status: 500 });
        }

        await sendWithSmtp({
          name,
          email,
          project,
          toEmail,
          fromEmail,
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          user: smtpUser,
          pass: smtpPass,
        });
      } else if (resendApiKey) {
        await sendWithResend({
          name,
          email,
          project,
          toEmail,
          fromEmail,
          resendApiKey,
        });
      } else {
        return NextResponse.json(
          {
            error:
              "Mail service is not configured. Set SMTP_* variables (with nodemailer installed) or RESEND_API_KEY.",
          },
          { status: 500 }
        );
      }
    } catch (mailError) {
      console.error("Mail delivery error:", mailError);
      if (
        typeof mailError === "object" &&
        mailError !== null &&
        "code" in mailError &&
        mailError.code === "MODULE_NOT_FOUND"
      ) {
        return NextResponse.json(
          { error: "SMTP package missing. Run `npm install nodemailer` or use RESEND_API_KEY." },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
