import { Resend } from "resend";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
    });
  }

  // Validate phone number (must be 10 digits)
  const sanitizedPhone = phone.replace(/\D/g, "");
  if (sanitizedPhone.length !== 10) {
    return new Response(
      JSON.stringify({ error: "Invalid phone number. Must be 10 digits." }),
      {
        status: 400,
      }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipientEmail = process.env.CONTACT_EMAIL || "ccarr@zanmarprotection.com";

  try {
    await resend.emails.send({
      from: "Zanmar Protection <noreply@zanmarprotection.com>",
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Email send failed" }), {
      status: 500,
    });
  }
}
