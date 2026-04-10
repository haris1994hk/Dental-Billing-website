# Email Configuration for Contact Form

To enable email functionality for the contact form, you need to set up your email service. Choose one of the options below:

## Option 1: Gmail with App Password (Recommended for development)

1. Go to https://myaccount.google.com/apppasswords
2. Generate an app password for "Mail" on "Windows Computer"
3. Create a `.env.local` file in the root directory with:

```env
OWNER_EMAIL=your-email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## Option 2: Using SendGrid (Recommended for production)

1. Sign up at https://sendgrid.com
2. Get your SendGrid API key
3. Create a `.env.local` file:

```env
OWNER_EMAIL=your-email@domain.com
SENDGRID_API_KEY=your-sendgrid-api-key
```

Then update `/src/app/api/contact/route.ts` with SendGrid integration.

## Option 3: Using Mailgun

1. Sign up at https://www.mailgun.com
2. Get your Mailgun API key and domain
3. Create a `.env.local` file:

```env
OWNER_EMAIL=your-email@domain.com
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.mailgun.org
```

## Testing Locally

1. Update the API route at `/src/app/api/contact/route.ts` with your chosen email service
2. Install required package: `npm install nodemailer` (for Gmail/SMTP option)
3. Restart the development server: `npm run dev`
4. Fill out the contact form and submit

## Current Setup

The API route is ready at `/src/app/api/contact` and will:
- Accept form data from the contact form
- Validate all required fields
- Send a confirmation email to the user
- Forward the submission to the owner email address

## Form Fields

- First Name (required)
- Last Name (required)
- Phone Number (required)
- Preferred Date (required)
- Preferred Time (required)
- Email (required)
- Message (required)
