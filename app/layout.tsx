import type { Metadata } from "next";
import "./globals.css"; // Ensure standard Tailwind directives are inside this file

export const metadata: Metadata = {
  title: "Ink & Interface | Full-Stack Startup Agency",
  description: "We handle your state legal formation, design your premium brand identity, and custom-code your web storefront. Turn your idea into a fully launched entity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 font-sans select-none selection:bg-slate-900 selection:text-white">
        {/* Main Content Render */}
        <main>{children}</main>
      </body>
    </html>
  );
}