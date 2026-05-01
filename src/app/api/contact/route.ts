import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  date: string;
  time: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.phoneNumber || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'haris@dentalbillingaid.com';
    
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare email content for owner
    const ownerEmailOptions = {
      from: process.env.SMTP_USER,
      to: ownerEmail,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      text: `
        New Contact Form Submission
        
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phoneNumber}
        Preferred Date: ${data.date}
        Preferred Time: ${data.time}
        Message: ${data.message}
      `,
    };

    // Prepare email content for customer
    const customerEmailOptions = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Consultation Request Received - Dental Billing Aid',
      text: `
        Thank you for reaching out!
        
        Hi ${data.firstName},
        
        We've received your consultation request and will get back to you shortly.
        
        Here's what we received:
        Name: ${data.firstName} ${data.lastName}
        Phone: ${data.phoneNumber}
        Preferred Date & Time: ${data.date} at ${data.time}
        
        Our team will contact you soon to confirm your consultation.
        
        Best regards,
        Dental Billing Aid Team
      `,
    };

    // Send emails if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      await transporter.sendMail(ownerEmailOptions);
      await transporter.sendMail(customerEmailOptions);
    } else {
      console.log('SMTP not configured. Form data:', data);
    }
    
    return NextResponse.json(
      { 
        message: 'Form submitted successfully. We will contact you soon.',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

