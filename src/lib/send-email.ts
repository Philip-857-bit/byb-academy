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
    from: `The Movement Academy <${process.env.GMAIL_USER}>`,
    to,
    subject: `🎉 Your Web3 Fundamentals Exam Results`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 1.5rem; background: #090A09; color: #EDEDED; border: 1px solid #181918; border-radius: 8px;">
        <h2 style="color: #0DF30D;">Congratulations, ${username}!</h2>
        <p>You just completed the <strong>The Movement Academy</strong> Web3 Fundamentals exam.</p>
        <p><strong>Score:</strong> ${score} / ${totalQuestions}</p>
        <p>Thank you for participating! 🚀</p>
        <p style="margin-top: 2rem;">Stay connected:<br/>Twitter: <a href="https://x.com/themovement" target="_blank" style="color: #0DF30D;">@themovement</a></p>
        <hr style="border-color: #181918;"/>
        <p style="font-size: 0.85rem; color: #888;">If you didn’t take the exam, you can ignore this email.</p>
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