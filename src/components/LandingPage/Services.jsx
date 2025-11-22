"use client";
import React from "react";
import { Cpu, Smartphone, Cloud, LineChart } from "lucide-react";

const services = [
  {
    icon: <Cpu size={32} className="text-[#46BCEC]" />,
    title: "Product Engineering",
    desc: "Design, build & scale high-performance digital products.",
  },
  {
    icon: <LineChart size={32} className="text-[#46BCEC]" />,
    title: "AI & Data Intelligence",
    desc: "Predictive analytics, MLOps, automation & intelligent systems.",
  },
  {
    icon: <Smartphone size={32} className="text-[#46BCEC]" />,
    title: "Mobile & Web Apps",
    desc: "Pixel-perfect apps crafted for speed, reliability & UX.",
  },
  {
    icon: <Cloud size={32} className="text-[#46BCEC]" />,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure with CI/CD, observability & automation.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-white/30 backdrop-blur-lg">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#46BCEC]/20 to-transparent blur-2xl opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-[#46BCEC]">
          What <span className="text-foreground"> We </span> do
        </h2>
        <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
          We help startups and enterprises design, engineer & scale next-gen
          digital products.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((item) => (
            <div
              key={item.title}
              className={`
                group relative p-6 rounded-3xl bg-white/40 backdrop-blur-xl
                border border-white/20 hover:border-[#46BCEC]/60
                shadow-[0_0_0_0_rgba(70,188,236,0)]
                hover:shadow-[0_0_45px_10px_rgba(70,188,236,0.25)]
                transition-all duration-700 cursor-pointer
                hover:-translate-y-3 hover:scale-[1.03] hover:brightness-105
              `}
            >
              {/* Glow Line */}
              <div className="absolute -top-0.5 left-0 w-0 h-0.5 bg-[#46BCEC] group-hover:w-full transition-all duration-700" />

              {/* Floating Animation */}
              <div className="animate-float">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-[#46BCEC] font-medium">
                Learn more
                <span className="block w-6 h-[2px] bg-[#46BCEC] group-hover:w-12 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Keyframe */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
