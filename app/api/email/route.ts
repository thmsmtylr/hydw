import { NextResponse, type NextRequest } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
	const { email, name, message } = await request.json();

	// Temporarily disabled for Cloudflare Pages compatibility
	// TODO: Implement Cloudflare-compatible email solution

	console.log("Contact form submission:", { email, name, message });

	// For now, just return success (you'll need to implement actual email functionality)
	return NextResponse.json({
		message:
			"Message received! Email functionality temporarily disabled for Cloudflare deployment.",
	});

	/* Original nodemailer implementation - commented out for Cloudflare compatibility
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
  */
}
