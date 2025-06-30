import { Resend } from 'resend';

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Zanmar Contact <info@zanmarprotection.com>', // You can verify a domain to change this
      to: 'info@zanmarprotection.com', // ✅ Replace with YOUR receiving email
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Email send failed" }), { status: 500 });
  }
}
