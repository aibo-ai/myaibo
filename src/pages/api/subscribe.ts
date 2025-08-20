import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    // Send email to admin
    await resend.emails.send({
      from: "MyAibo <vamsi@myaibo.in>",
      to: "tathagat@myaibo.in",
      subject: "New Newsletter Subscription",
      html: `
      <p>Hi Admin,</p>
    <p>The user <b>${email}</b> has subscribed to MyAibo.in.</p>
    <br/>
    <p>Kind regards,<br/>MyAibo Team</p>
    `,
    });

    // Send confirmation to user
    // await resend.emails.send({
    //   from: "MyAibo <vamsi@myaibo.in>",
    //   to: email,
    //   subject: "Subscription Confirmed",
    //   html: `<p>Thank you for subscribing to MyAibo newsletter!</p>
    //          <p>If you wish to unsubscribe, <a href="https://www.myaibo.in/unsubscribe">click here</a>.</p>`,
    // });

    res.status(200).json({ success: true });
  } catch (err) {
  console.error("Subscribe API error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}