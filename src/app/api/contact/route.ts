import { NextRequest, NextResponse } from 'next/server';

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
    
    // Prepare email content for owner
    const ownerEmailBody = `
      New Contact Form Submission
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phoneNumber}
      Preferred Date: ${data.date}
      Preferred Time: ${data.time}
      Message: ${data.message}
    `;

    // Prepare email content for customer
    const customerEmailBody = `
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
    `;

    // If using an external service like SendGrid, Mailgun, etc., configure here
    // For now, this just logs and returns success - configure SMTP service separately
    
    // Log the form data (in production, integrate with your email service)
    console.log('Contact Form Submission:', data);
    
    // You can integrate with your email service here:
    // Option 1: Use SendGrid API
    // Option 2: Use Mailgun API
    // Option 3: Use Nodemailer with your SMTP server
    // Option 4: Use AWS SES

    return NextResponse.json(
      { 
        message: 'Form submitted successfully. We will contact you soon.',
        success: true,
        data: {
          recipient: ownerEmail
        }
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

