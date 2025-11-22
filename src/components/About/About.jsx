"use client";

import React, { useEffect } from "react";
import { Cpu, LineChart, Cloud, Users } from "lucide-react";
import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "Alice Johnson",
      role: "CEO",
      quote: "Building the future with you.",
    },
    {
      name: "Bob Lee",
      role: "CTO",
      quote: "Technology is the heart of our innovation.",
    },
    {
      name: "Anna Frit",
      role: "CFO",
      quote: "Building the future with you.",
    },
  ];

  const services = [
    {
      icon: <Cpu size={28} className="text-blue-400" />,
      title: "Product Engineering",
    },
    {
      icon: <LineChart size={28} className="text-blue-400" />,
      title: "AI & Data Intelligence",
    },
    {
      icon: <Cloud size={28} className="text-blue-400" />,
      title: "Cloud & DevOps",
    },
    {
      icon: <Users size={28} className="text-blue-400" />,
      title: "Team Augmentation",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-blob top-10 left-1/4"></div>
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-15 animate-blob animation-delay-2000 top-1/3 left-3/4"></div>
        <div className="absolute w-80 h-80 bg-blue-300 rounded-full opacity-10 animate-blob animation-delay-4000 top-2/3 left-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <div className="text-center mb-32 fade-in-section">
          <h1 className="text-5xl font-bold text-[#46BCEC]">
            We Build Tomorrow, Today
          </h1>
          <p className="mt-4 text-Foreground max-w-2xl mx-auto text-lg">
            Combining creativity and cutting-edge technology, we transform ideas
            into impactful digital experiences.
          </p>
        </div>

        {/* Story & Mission - modern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="fade-in-section relative overflow-hidden">
            <div className="absolute -top-20 -left-10 opacity-20 text-8xl animate-float-slow text-blue-400">
              <Cpu />
            </div>
            <h2 className="text-5xl font-bold text-[#46BCEC] mb-6">
              Our Story
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              We’ve grown from a small passionate team into a global technology
              partner. We create innovative digital solutions that transform
              businesses and delight users worldwide.
            </p>
            <p className="text-gray-400 italic text-lg">
              Our journey is driven by curiosity, innovation, and the desire to
              solve real-world problems.
            </p>
          </div>

          <div className="fade-in-section relative overflow-hidden lg:mt-20">
            <div className="absolute -top-20 -right-10 opacity-20 text-8xl animate-float-slow text-blue-400">
              <LineChart />
            </div>
            <h2 className="text-5xl font-bold text-[#46BCEC] mb-6">
              Mission & Vision
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              We aim to empower businesses with innovative technology,
              transforming ideas into reality. Our vision is a world where
              creativity meets technical excellence.
            </p>
            <p className="text-gray-400 italic text-lg">
              We focus on delivering measurable impact, building products that
              inspire and scale globally.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-32 fade-in-section">
          <h2 className="text-3xl font-semibold text-[#46BCEC] mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center text-center space-y-4 p-6 bg-[#111827]/70 rounded-3xl backdrop-blur-md hover:scale-105 transition-transform duration-500 border border-blue-600/20 shadow-lg"
              >
                <div className="p-4 bg-blue-900/30 rounded-full">{s.icon}</div>
                <h3 className="text-xl font-medium text-white">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-32 fade-in-section">
          <h2 className="text-3xl font-semibold text-[#46BCEC] mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-[#111827]/70 backdrop-blur-md rounded-3xl text-center hover:scale-105 transition-transform duration-500 border border-blue-600/20 shadow-lg"
              >
                <div className="text-4xl text-[#46BCEC] mb-4">
                  <Users size={40} />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
                <blockquote className="mt-4 text-gray-300 italic">
                  “{member.quote}”
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-section">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-tr from-[#46BCEC] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Work With Us
          </Link>
        </div>
      </div>

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

        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0px);
        }
      `}</style>
    </section>
  );
};

export default About;
