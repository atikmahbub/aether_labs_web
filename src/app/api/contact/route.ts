import { Resend } from "resend";

// Route runs on the Node.js runtime so we can read secrets at request time.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO || "hello@doodledash.uk";
// Resend requires a verified sender. `onboarding@resend.dev` works out of the
// box (delivers to the Resend account owner). Once doodledash.uk is verified in
// Resend, set CONTACT_FROM to e.g. "Doodle Dash Labs <hello@doodledash.uk>".
const FROM = process.env.CONTACT_FROM || "Doodle Dash Labs <onboarding@resend.dev>";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const projectType = clean(body.projectType) || "Not specified";
  const message = clean(body.message);

  if (!name || !isEmail(email) || !message) {
    return Response.json(
      { ok: false, error: "Please provide your name, a valid e-mail, and a message." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New project enquiry — ${name} (${projectType})`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 16px">New project enquiry</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          <p><strong>Project type:</strong> ${esc(projectType)}</p>
          <p style="margin-top:16px"><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${esc(message)}</p>
        </div>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }
}
