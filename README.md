# Ink & Interface

This repository contains the source code for **Ink & Interface**, a full-stack startup agency website. The project is designed as a productized "Business-in-a-Box" service that handles state legal formation, designs premium brand identities, and custom-codes web storefronts for new ventures.

The application is built with Next.js, TypeScript, and Tailwind CSS, featuring an automated onboarding flow that captures client details, sends an email notification via Resend, and directs the user to a Stripe payment link.

![screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1780140429/Ink-Interface-Full-Stack-Startup-Agency-05-30-2026_06_26_AM_goyjyh.png)

## ✨ Features

-   **Productized Service Landing Page**: A clean, modern interface showcasing the agency's services, pricing, and case studies.
-   **Automated Onboarding Funnel**: A multi-step form at `/onboard` to capture essential business details from new clients.
-   **API-Driven Notifications**: A serverless API route (`/api/onboard`) that processes form submissions and uses the Resend API to dispatch email alerts for new leads.
-   **Payment Integration**: Seamlessly redirects clients to pre-configured Stripe payment links based on their selected service tier.
-   **Component-Based Architecture**: A modular frontend built with reusable React components for the hero section, case studies, and pricing tiers.
-   **Detailed Case Studies**: In-depth pages, like the "Ski Barn" example, that break down the agency's process and results.
-   **Responsive Design**: A fully responsive layout optimized for all devices, crafted with Tailwind CSS.

## 🛠️ Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Library**: [React](https://react.dev/)
-   **Email API**: [Resend](https://resend.com/)
-   **Payments**: [Stripe](https://stripe.com/) (via secure payment links)

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (v20.x or later)
-   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codelikeagirl29/ink-and-interface.git
    cd ink-and-interface
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Resend API key. The onboarding form submission will fail without it.

    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

4.  **Configure API settings (optional):**
    To receive email notifications and process payments, you'll need to update the placeholders in `app/api/onboard/route.ts`:
    -   Update the `STRIPE_LINKS` object with your own Stripe payment links.
    -   Change the recipient email address in the `resend.emails.send` `to:` field.
    -   Change the sender email address in the `from:` field to a domain verified with Resend.

### Running the Application

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

A brief overview of the key directories and files in this project:

```
.
├── app/
│   ├── api/onboard/route.ts   # API endpoint for processing new client intake forms.
│   ├── case-studies/ski-barn/ # A dynamic route for a specific case study.
│   ├── onboard/page.tsx       # The new client onboarding form page.
│   ├── layout.tsx             # The root layout for the application.
│   └── page.tsx               # The main landing page.
├── components/
│   ├── Hero.tsx               # The hero section component.
│   ├── CaseStudy.tsx          # The case study summary component for the homepage.
│   └── Pricing.tsx            # The pricing table component.
├── public/
│   └── ski-barn.jpg           # Static image assets.
├── next.config.ts             # Next.js configuration file.
└── tailwind.config.ts         # Tailwind CSS configuration file.
```

## ⚖️ Disclaimer

Ink & Interface is presented as a corporate document preparation, branding, and web design studio. It is not a law firm, does not provide legal, tax, or financial advice, and its services do not substitute for the counsel of an attorney or CPA. All filing actions are executed strictly at the user's direction.