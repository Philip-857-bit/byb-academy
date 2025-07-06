import nodemailer from 'nodemailer';

type EmailParams = {
  to: string;
  username: string;
  score: number;
  totalQuestions: number;
};

export async function sendCompletionEmail({ to, username, score, totalQuestions }: EmailParams) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `BYB Quiz <${process.env.GMAIL_USER}>`,
    to,
    subject: `🎉 Your BYB Quiz Results`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 1.5rem; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #6D28D9;">Congratulations, ${username}!</h2>
        <p>You just completed the <strong>BYB Quiz</strong>.</p>
        <p><strong>Score:</strong> ${score} / ${totalQuestions}</p>
        <p>Thank you for participating! 🚀</p>
        <p style="margin-top: 2rem;">Stay connected:<br/>Twitter: <a href="https://x.com/bybacademy" target="_blank">@bybacademy</a></p>
        <hr/>
        <p style="font-size: 0.85rem; color: #888;">If you didn’t take the quiz, you can ignore this email.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}