import React from "react";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col space-y-10 justify-center items-center my-16 px-6 max-w-7xl mx-auto border-t border-slate-200 pt-12 text-slate-500 font-sans">
      {/* Centered Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 font-medium uppercase tracking-wider text-xs">
        <Link className="hover:text-slate-900 transition-colors" href="/">
          Home
        </Link>
        <Link
          className="hover:text-slate-900 transition-colors"
          href="/case-studies/ski-barn"
        >
          Case Studies
        </Link>
        <Link
          className="hover:text-slate-900 transition-colors"
          href="/onboard"
        >
          Initialize Launch
        </Link>
        <Link className="hover:text-slate-900 transition-colors" href="/about">
          About
        </Link>
        <a
          className="hover:text-slate-900 transition-colors"
          href="mailto:lindseykdev@gmail.com"
        >
          Contact
        </a>
      </nav>

      {/* Social & Professional Connections via React-Icons */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn Professional Profile"
        >
          <SlSocialLinkedin size={26} />
        </a>
        <a
          href="https://github.com/CodeLikeAGirl29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-950 transition-all duration-300 hover:scale-110"
          aria-label="GitHub Repository Workspace"
        >
          <FiGithub size={26} />
        </a>
      </div>

      {/* Mandatory Operational Safeguard & Copyright Meta Container */}
      <div className="w-full max-w-4xl text-center space-y-6">
        <p className="text-[10px] text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
          <strong>Disclaimer:</strong> Ink & Interface is a corporate document
          preparation, branding, and custom web design studio. We are not a law
          firm, do not provide legal, tax, or financial advice, and our services
          do not substitute for the counsel of an attorney or CPA. All filing
          actions are executed strictly at your direction.
        </p>
        <p className="text-center text-slate-400 font-mono text-[11px] tracking-wide">
          &copy; {currentYear} Ink & Interface. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
