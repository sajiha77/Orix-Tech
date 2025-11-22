"use client";
import React from "react";
import { ShieldCheck, Lock, Globe, UserCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden  text-white">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-20 left-1/3 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-cyan-500/10 blur-2xl rounded-full bottom-20 right-1/4 animate-spin-slow"></div>
        <div className="absolute w-72 h-72 bg-blue-400/10 blur-3xl rounded-full top-1/2 left-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center text-[#46BCEC] drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-center mt-4 text-lg">
          Your trust is our foundation. Learn how we safeguard your data.
        </p>

        {/* Glass container */}
        <div className="mt-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl bg-[#111827]/70 shadow-2xl p-10 space-y-16">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">1. Introduction</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our website, services, or
              interact with our digital products.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">2. Information We Collect</h2>
            </div>

            <ul className="space-y-2 text-gray-300 list-disc pl-6">
              <li>
                Account information such as name, email, phone, company details.
              </li>
              <li>Usage data such as analytics, clicks, session behavior.</li>
              <li>Device and browser information.</li>
              <li>Communication logs, chat responses, and support requests.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">
                3. How We Protect Your Data
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We implement advanced encryption, multi-layer security
              infrastructure, and compliance-aligned data handling practices to
              ensure your information remains safe.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">4. Third-Party Sharing</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We do not sell your data. Limited information may be shared with
              trusted partners strictly for improving your experience,
              analytics, or transaction processing.
            </p>
          </section>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-[#46BCEC] hover:underline text-lg font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
