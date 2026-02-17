# Waitlist Email Setup Guide

This guide will help you set up the automated waitlist email system for AIEduco.

## Features

✅ **Multi-step Form**: Collects email first, then name and phone number
✅ **Automated Emails**: Sends welcome email to users and notification to admin
✅ **Beautiful Email Templates**: Professional HTML emails with branding
✅ **Real-time Validation**: Form validation with user feedback

## Setup Instructions

### 1. Create Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### 2. Configure Email Service

#### For Gmail:

1. **Enable 2-Step Verification**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the generated 16-character password

3. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ADMIN_EMAIL=admin@yourdomain.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

#### For Other Email Services:

Update the transporter configuration in `app/api/waitlist/route.ts`:

```typescript
const transporter = nodemailer.createTransporter({
    host: 'smtp.your-provider.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
```

**Common SMTP Settings**:
- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port 587
- **Yahoo**: `smtp.mail.yahoo.com`, port 587
- **SendGrid**: `smtp.sendgrid.net`, port 587
- **Mailgun**: `smtp.mailgun.org`, port 587

### 3. Test the Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`

3. Fill out the waitlist form with your email

4. Check your inbox for the welcome email

5. Check the admin email for the notification

## Email Templates

### User Welcome Email
- Personalized greeting with user's name
- Information about the bootcamp
- Call-to-action button
- Professional branding

### Admin Notification Email
- User's email address
- User's name
- User's phone number
- Timestamp of signup

## Troubleshooting

### "Invalid login" Error
- Make sure you're using an app-specific password, not your regular password
- Verify 2-Step Verification is enabled
- Check that EMAIL_USER and EMAIL_PASSWORD are correct

### Emails Not Sending
- Check your internet connection
- Verify SMTP settings are correct
- Check spam folder
- Review server logs for error messages

### "Connection timeout" Error
- Your hosting provider might block SMTP ports
- Try using port 465 with `secure: true`
- Consider using a dedicated email service like SendGrid or Mailgun

## Production Deployment

### Vercel

1. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

2. Redeploy your application

### Other Platforms

Add the environment variables through your platform's dashboard or CLI.

## Alternative Email Services (Recommended for Production)

For better deliverability and reliability in production, consider using:

### SendGrid (Free tier: 100 emails/day)
```typescript
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
    },
});
```

### Resend (Modern, developer-friendly)
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Mailgun
```typescript
const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASSWORD,
    },
});
```

## Database Integration (Optional)

To store waitlist signups in a database, you can:

1. **Add Supabase** (already in your project):
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   
   const supabase = createClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.SUPABASE_SERVICE_ROLE_KEY!
   );
   
   await supabase.from('waitlist').insert({
       email,
       name,
       phone,
       created_at: new Date().toISOString(),
   });
   ```

2. **Create a table** in Supabase:
   ```sql
   CREATE TABLE waitlist (
       id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
       email TEXT NOT NULL UNIQUE,
       name TEXT,
       phone TEXT,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

## Support

If you encounter any issues, please check:
1. Environment variables are set correctly
2. Email service credentials are valid
3. Server logs for detailed error messages

For additional help, refer to:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail SMTP Guide](https://support.google.com/mail/answer/7126229)
