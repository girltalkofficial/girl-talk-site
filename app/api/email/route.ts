import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    
    console.log('MY_EMAIL:', process.env.MY_EMAIL);
    console.log('MY_PASSWORD:', process.env.MY_PASSWORD);
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email}) from Girl Talk Website`,
      text: message,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message received' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
