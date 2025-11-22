"use client";
import React from "react";
import Link from "next/link";
import { CreditCard, Truck, HeartPulse } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Fintech Platform",
      subtitle: "Scaling to 1M users",
      icon: <CreditCard className="w-12 h-12 text-[#46BCEC]" />,
    },
    {
      title: "Logistics AI",
      subtitle: "Route Optimization",
      icon: <Truck className="w-12 h-12 text-[#60A5FA]" />,
    },
    {
      title: "Healthcare App",
      subtitle: "Telecare & Dashboards",
      icon: <HeartPulse className="w-12 h-12 text-[#3B82F6]" />,
    },
  ];

  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-blob top-10 left-1/4"></div>
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-15 animate-blob animation-delay-2000 top-1/3 left-3/4"></div>
        <div className="absolute w-80 h-80 bg-blue-300 rounded-full opacity-10 animate-blob animation-delay-4000 top-2/3 left-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-center text-[#46BCEC]">
            Case <span className="text-foreground"> Studies </span>
          </h2>
          <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            Explore how we’ve helped startups, enterprises, and global brands
            build world-class digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-blue-600/30" />

          {/* Timeline items */}
          {studies.map((study, i) => (
            <div
              key={i}
              className={`mb-16 flex flex-col lg:flex-row items-center ${
                i % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-blue-900/30 rounded-full shadow-xl backdrop-blur-md transform transition duration-500 hover:scale-110">
                {study.icon}
              </div>

              {/* Content */}
              <div className="bg-[#111827]/70 p-6 rounded-2xl shadow-lg lg:max-w-md mt-6 lg:mt-0 lg:mx-10 relative hover:shadow-[#46BCEC]/50 transition-shadow duration-300 backdrop-blur-md border border-blue-600/20">
                <div className="absolute -left-10 lg:-left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-tr from-[#46BCEC] to-[#3B82F6] rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  {i + 1}
                </div>
                <div className="text-[#46BCEC] font-semibold text-sm">
                  {study.subtitle}
                </div>
                <h4 className="text-2xl font-bold mt-1">{study.title}</h4>
                <p className="text-gray-300 mt-2 text-sm">
                  Delivered scalable architecture, optimized workflows, and
                  product experiences that move metrics.
                </p>
                <Link
                  href="/case-studies"
                  className="mt-4 inline-block text-[#46BCEC] font-medium text-sm hover:underline"
                >
                  View case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
