"use client";
import React from "react";
import Link from "next/link";

const WhyOrix = () => {
  const cols = [
    {
      title: "Fast ramp-up",
      text: "Dedicated engineering teams that integrate seamlessly with your workflow.",
    },
    {
      title: "Product-first mindset",
      text: "We build for outcomes — velocity, retention, scalability, and user delight.",
    },
    {
      title: "Security & compliance",
      text: "Secure-by-design architecture with global compliance standards.",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#46BCEC15,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading Section */}
        <div className="max-w-xl space-y-4 relative">
          {/* Accent Line */}
          <div className="w-20 h-1 bg-[#46BCEC] rounded-full shadow-[0_0_15px_#46BCEC]" />

          <h3 className="text-4xl font-extrabold text-foreground tracking-tight">
            Why
            <span className="text-[#46BCEC]"> Orix Tech</span>
          </h3>

          <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            We blend deep domain expertise with elite engineering craft to build
            products that outperform competitors — in speed, UX, and scale.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-4 px-7 py-3 rounded-full bg-[#46BCEC]/20 
            text-[#46BCEC] border border-[#46BCEC]/30 hover:bg-[#46BCEC]/30
            backdrop-blur-xl transition-all duration-300 shadow-[0_0_15px_#46BCEC30]
            hover:shadow-[0_0_20px_#46BCEC60]"
          >
            Talk to an expert
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cols.map((c) => (
            <div
              key={c.title}
              className="
                group relative p-[2px] rounded-3xl 
                bg-gradient-to-br from-[#46BCEC40] to-transparent
                hover:from-[#46BCEC80] transition-all duration-500
              "
            >
              <div
                className="
                h-full w-full rounded-3xl p-6 bg-[#0D1117]/80 
                backdrop-blur-xl border border-white/10
                transition-all duration-500 group-hover:-translate-y-2
                group-hover:shadow-[0_0_25px_#46BCEC50]
              "
              >
                <h4 className="text-xl font-semibold text-white">{c.title}</h4>
                <p className="text-[#A8A8A8] mt-3 leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrix;
