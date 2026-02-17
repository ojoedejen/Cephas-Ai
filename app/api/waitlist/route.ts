import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, name, phone } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Create a transporter using your email service
        // You'll need to configure this with your email credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email to admin with waitlist signup details
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: 'New Waitlist Signup - Cephas AI',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #ff5c35;">New Waitlist Signup</h2>
                    <p>Someone just joined the waitlist!</p>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Email:</strong> ${email}</p>
                        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
        };

        // Welcome email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Cephas AI Waitlist! 🎉',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #ff5c35; margin: 0;">Cephas <span style="color: #1a1a1a;">AI</span></h1>
                    </div>
                    
                    <h2 style="color: #1a1a1a;">Welcome to the Future of Learning! 🚀</h2>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333;">
                        ${name ? `Hi ${name},` : 'Hi there,'}
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333;">
                        Thank you for joining our waitlist! We're thrilled to have you on board for our 
                        <strong style="color: #ff5c35;">intensive AI Bootcamps</strong>.
                    </p>
                    
                    <div style="background: linear-gradient(135deg, #ff5c35 0%, #8b5cf6 100%); 
                                padding: 30px; 
                                border-radius: 12px; 
                                margin: 30px 0; 
                                color: white;">
                        <h3 style="margin-top: 0; color: white;">What's Next?</h3>
                        <ul style="line-height: 1.8;">
                            <li>You'll be among the first to know when we launch</li>
                            <li>Get exclusive early-bird discounts</li>
                            <li>Access to premium learning resources</li>
                            <li>Join our vibrant community of learners</li>
                        </ul>
                    </div>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333;">
                        We'll keep you updated on our progress and send you exciting news about the bootcamp.
                    </p>
                    
                    <div style="text-align: center; margin: 40px 0;">
                        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://v0-ai-educo-landing-page.vercel.app'}" 
                           style="background-color: #ff5c35; 
                                  color: white; 
                                  padding: 15px 40px; 
                                  text-decoration: none; 
                                  border-radius: 25px; 
                                  font-weight: bold;
                                  display: inline-block;">
                            Visit Our Website
                        </a>
                    </div>
                    
                    <p style="font-size: 14px; color: #666; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
                        Questions? Reply to this email and we'll be happy to help!
                    </p>
                    
                    <p style="font-size: 14px; color: #666;">
                        Best regards,<br>
                        <strong>The Cephas AI Team</strong>
                    </p>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Successfully joined the waitlist!'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Waitlist submission error:', error);
        return NextResponse.json(
            {
                error: 'Failed to process waitlist submission',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
