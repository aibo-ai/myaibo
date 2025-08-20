import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    // Notify admin
    await resend.emails.send({
      from: "MyAibo <vamsi@myaibo.in>",
      to: "tathagat@myaibo.in",
      subject: "Unsubscribe Request",
      html: `<p>Hi Admin,</p>
    <p>The user <b>${email}</b> has unsubscribed to MyAibo.in.</p>
    <br/>
    <p>Kind regards,<br/>MyAibo Team</p>`,
    });

    // Notify user
    // await resend.emails.send({
    //   from: "MyAibo <noreply@yourdomain.com>",
    //   to: email,
    //   subject: "You have been unsubscribed",
    //   html: `<p>You have been unsubscribed from MyAibo newsletter.</p>
    //          <p>If this was a mistake, <a href="https://www.myaibo.in/subscribe">subscribe again</a>.</p>`,
    // });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}