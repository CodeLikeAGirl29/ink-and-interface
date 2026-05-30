import { NextResponse } from "next/server";
import { Resend } from "resend";

// Build-proof initialization fallback
const apiKey = process.env.RESEND_API_KEY || "re_placeholder_for_compilation";
const resend = new Resend(apiKey);

// Your mapped Stripe shareable payment links
const STRIPE_LINKS: Record<string, string> = {
  basic: "https://buy.stripe.com/28E14n9Me2zzahTbatefC00",
  premium: "https://buy.stripe.com/aFa14nbUm2zz2PrfqJefC01", // Replace this one next
};

export async function POST(request: Request) {
  try {
    // Fail-safe check at execution runtime if the key is missing from Vercel
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "Runtime Error: RESEND_API_KEY environment variable is not defined."
      );
      return NextResponse.json(
        { error: "Mail system configuration mismatch." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { tier, businessName, ownerName, email } = body;

    if (!tier || !businessName || !ownerName || !email) {
      return NextResponse.json(
        { error: "Missing parameters." },
        { status: 400 }
      );
    }

    // Capture the target payment URL based on the user's selected plan
    const checkoutUrl = STRIPE_LINKS[tier] || STRIPE_LINKS.basic;

    // Compile a clean HTML notification layout for your inbox
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; color: #0f172a; line-height: 1.6;">
        <h2 style="font-size: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; font-weight: 800; text-transform: uppercase; tracking: tight;">
          New Launch Framework Initialized
        </h2>
        <p style="margin-top: 18px;">A new business setup intake form has been submitted with the following parameters:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Selected Tier:</td>
            <td style="padding: 8px 0; font-weight: 600;">${tier.toUpperCase()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Proposed Name:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${businessName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Organizer:</td>
            <td style="padding: 8px 0;">${ownerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Secure Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0f172a; font-weight: 600;">${email}</a></td>
          </tr>
        </table>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 32px; font-size: 11px; color: #94a3b8;">
          Next Steps: Cross-reference state corporate registry fields, verify entity name constraints, and prepare draft service binders.
        </div>
      </div>
    `;

    // Dispatch the alert email using Resend
    await resend.emails.send({
      from: "Ink & Interface Alerts <onboarding@yourdomain.com>",
      to: "your-personal-inbox@domain.com", // Adjust to your preferred inbox address
      subject: `[Launch Alert] - ${businessName} (${tier.toUpperCase()})`,
      html: emailHtml,
    });

    // Send the successful response back along with the dynamic redirect target
    return NextResponse.json(
      {
        success: true,
        checkoutUrl: checkoutUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Pipeline Exception Error:", error);
    return NextResponse.json(
      { error: "Internal system error." },
      { status: 500 }
    );
  }
}
