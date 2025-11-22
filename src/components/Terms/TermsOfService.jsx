"use client";
import React from "react";
import { ScrollText, FileText, BadgeCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-20 left-1/3 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-cyan-500/10 blur-2xl rounded-full bottom-20 right-1/4 animate-spin-slow"></div>
        <div className="absolute w-72 h-72 bg-blue-400/10 blur-3xl rounded-full top-1/2 left-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center text-[#46BCEC] drop-shadow-lg">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 text-center mt-4 text-lg">
          Please read these terms carefully before using our services.
        </p>

        {/* Glass Container */}
        <div className="mt-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl bg-[#111827]/70 shadow-2xl p-10 space-y-16">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ScrollText className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">1. Agreement to Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our website and services, you agree to
              comply with these Terms & Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">2. Use of Our Services</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Use of our platform must comply with all applicable laws.</li>
              <li>
                You may not use our services for harmful, abusive, or illegal
                activities.
              </li>
              <li>
                Account owners are responsible for all activity performed under
                their account.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <BadgeCheck className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">3. Intellectual Property</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              All content, branding, design elements, software, and assets
              belong to our company. You may not copy, modify, distribute, or
              resell any material without explicit permission.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-[#46BCEC] w-10 h-10" />
              <h2 className="text-3xl font-bold">4. Limitation of Liability</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We are not responsible for service interruptions, data breaches
              caused by external attacks, or loss of information. Your use of
              our services is done at your own risk.
            </p>
          </section>
        </div>

        {/* Back Link */}
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
