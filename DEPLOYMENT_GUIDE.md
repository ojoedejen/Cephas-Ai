# Deployment Guide for AIEduco Landing Page

This guide outlines the steps to deploy your updated AIEduco landing page and ensure all features work correctly in production.

## 1. Verify Vercel Deployment

Since you have pushed changes to GitHub, Vercel should automatically trigger a new deployment.

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project (`v0-ai-educo-landing-page`).
3.  Go to the **Deployments** tab.
4.  You should see a building or completed deployment corresponding to your latest commit.
5.  If the build failed, check the logs for errors. Common issues include type errors or missing dependencies.

## 2. Configure Environment Variables

For the waitlist and email functionality to work in production, you must set the environment variables in Vercel.

1.  In your Vercel project, go to **Settings** > **Environment Variables**.
2.  Add the following variables (use the same values from your local `.env.local` file):
    *   `EMAIL_USER`: Your email address (e.g., `alhassanojoek@gmail.com`).
    *   `EMAIL_PASSWORD`: Your app-specific password.
    *   `ADMIN_EMAIL`: The email to receive notifications (e.g., `alhassanojoek@gmail.com`).
    *   `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://v0-ai-educo-landing-page-c5rl5j4k4-ojoedejens-projects.vercel.app`).

**Important:** After adding environment variables, you must **Redeploy** your latest deployment for the changes to take effect.
   - Go to **Deployments**.
   - Click the three dots (...) next to the latest deployment.
   - Select **Redeploy**.

## 3. Verify Functionality in Production

Once the deployment is ready:

1.  **Waitlist Form**:
    *   Go to your live site.
    *   Enter an email in the waitlist form.
    *   Complete the details step (Name, Phone).
    *   Check your `EMAIL_USER` inbox for the "Welcome" email.
    *   Check your `ADMIN_EMAIL` inbox for the "New Waitlist Signup" notification.

2.  **Resources Page**:
    *   Navigate to the **Resources** page.
    *   Verify that the builder kit cards are displayed correctly.
    *   Click the **"Open Doc"** button on a card. It should open the documentation link in a new tab.
    *   Click **"Start Building"** or **"View Details"** to open the modal.

3.  **Navigation**:
    *   On a mobile device (or by resizing your browser), open the hamburger menu.
    *   Navigate between "Home" and "Resources". The menu should close automatically.

## 4. Troubleshooting

*   **Emails not sending?**
    *   Double-check your `EMAIL_PASSWORD` in Vercel. Ensure there are no leading/trailing spaces.
    *   Check Vercel **Logs** > **Functions** for any errors in the `/api/waitlist` route.
    *   Ensure 2-Step Verification is enabled on your Gmail account if using Gmail.

*   **Changes not showing?**
    *   Try a hard refresh (Ctrl+F5 or Cmd+Shift+R) to clear the browser cache.
    *   Verify that the latest commit on GitHub matches the deployed commit on Vercel.
