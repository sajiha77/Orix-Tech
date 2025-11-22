"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Cpu, Cloud, LineChart, Server, Package, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cpu size={36} className="text-[#46BCEC]" />,
      title: "Product Engineering",
      desc: "End-to-end product development: design, build, test, deploy.",
    },
    {
      icon: <LineChart size={36} className="text-[#3B82F6]" />,
      title: "AI & Data Intelligence",
      desc: "Predictive analytics, ML pipelines, and custom data systems.",
    },
    {
      icon: <Cloud size={36} className="text-[#60A5FA]" />,
      title: "Cloud & DevOps",
      desc: "Scalable infra, CI/CD, Kubernetes, and cloud-native architecture.",
    },
    {
      icon: <Server size={36} className="text-[#4F46E5]" />,
      title: "Custom Software Solutions",
      desc: "Web, mobile, desktop or SaaS apps tailored to your needs.",
    },
    {
      icon: <Package size={36} className="text-[#22D3EE]" />,
      title: "Emerging Tech / Blockchain",
      desc: "Blockchain, Web 3.0, decentralized apps (dApps), smart contracts.",
    },
    {
      icon: <Layers size={36} className="text-[#0EA5E9]" />,
      title: "Architecture & System Design",
      desc: "Robust, secure, and scalable system & cloud architecture design.",
    },
  ];

  // Scroll fade-in animation
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="relative   text-primry py-24 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-blob top-5 left-1/3"></div>
        <div className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-15 animate-blob animation-delay-3000 top-2/3 left-3/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero / Intro */}

        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl font-extrabold text-center text-[#46BCEC]">
            Our <span className="text-foreground"> Services </span>
          </h2>{" "}
          <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            {" "}
            We partner with visionary companies to build scalable, intelligent,
            and future-ready digital products.
          </p>
        </div>

        {/* How We Work / Process */}
        <div className="mb-24 fade-in">
          <h2 className="text-3xl font-semibold text-[#46BCEC] mb-8 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              "Discovery & Planning",
              "Design & Prototyping",
              "Development & Testing",
              "Deployment & Growth",
            ].map((step, idx) => (
              <div
                key={step}
                className="relative p-6 bg-[#111827]/70 rounded-2xl backdrop-blur-md border border-blue-600/20 shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#46BCEC] to-[#3B82F6] w-12 h-1 rounded-full`}
                />
                <h3 className="text-xl font-medium text-white mt-4">{step}</h3>
                <p className="text-gray-300 mt-2">
                  {step === "Discovery & Planning"
                    ? "We collaborate to define goals, user personas & metrics."
                    : step === "Design & Prototyping"
                    ? "UI/UX, wireframes, and interactive prototypes bring your vision to life."
                    : step === "Development & Testing"
                    ? "Building your product with best practices, tests & CI/CD."
                    : "Launching & scaling — infrastructure, monitoring, and growth support."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="mb-24 fade-in">
          <h2 className="text-3xl font-semibold text-[#46BCEC] mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-8 bg-[#111827]/70 backdrop-blur-md rounded-3xl border border-blue-600/20 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                <p className="text-gray-300 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-tr from-[#46BCEC] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Let's Talk About Your Project
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0px);
        }
      `}</style>
    </section>
  );
};

export default Services;
