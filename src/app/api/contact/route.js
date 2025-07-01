import { Resend } from "resend";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message, captchaToken } = body;

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

  if (!captchaToken) {
    return new Response(JSON.stringify({ error: "Captcha token missing" }), {
      status: 400,
    });
  }

  // Verify captcha token with Google
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    }
  );

  const verifyData = await verifyRes.json();
  console.log("Google reCAPTCHA response:", verifyData);

  if (!verifyData.success || (verifyData.score && verifyData.score < 0.5)) {
    return new Response(
      JSON.stringify({ error: "Captcha verification failed" }),
      {
        status: 400,
      }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Zanmar Contact <contact@zanmarprotection.com>",
      to: "ccarr@zanmarprotection.com",
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
