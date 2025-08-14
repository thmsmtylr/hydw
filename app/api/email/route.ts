import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
	const { email, name, message } = await request.json();

	try {
		// For now, we'll create a simple response since Cloudflare Email Workers
		// binding isn't available in local development
		// When deployed to Cloudflare Pages, this will work with the Email Workers binding

		console.log("Contact form submission:", {
			to: "georgia@haventyoudonewell.com",
			from: "noreply@haventyoudonewell.com",
			subject: `New Contact Form Message from ${name}`,
			name,
			email,
			message,
		});

		// TODO: When deployed to Cloudflare, implement actual email sending using:
		// const emailMessage = new EmailMessage(
		//   "noreply@haventyoudonewell.com",
		//   "georgia@haventyoudonewell.com",
		//   {
		//     subject: `New Contact Form Message from ${name}`,
		//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		//     html: `<h2>New Contact Form Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
		//   }
		// );
		// await env.CONTACT_EMAIL.send(emailMessage);

		return NextResponse.json({
			message:
				"Thank you! Your message has been received and will be sent via Cloudflare Email Workers when deployed.",
		});
	} catch (error) {
		console.error("Error processing contact form:", error);
		return NextResponse.json(
			{
				error: "Failed to process your message. Please try again later.",
			},
			{ status: 500 },
		);
	}
}
