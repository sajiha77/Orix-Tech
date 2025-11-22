"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Backend integration later)");
  };

  return (
    <section className="relative min-h-screen text-white px-6 py-20 overflow-hidden ">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-1/4 animate-blob"></div>
        <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-2xl top-2/3 right-1/4 animate-blob animation-delay-3000"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-[#46BCEC] flex justify-center items-center gap-2">
          <Sparkles className="text-blue-300" size={38} />
          Get in <span className="text-foreground">Touch</span>
          <Sparkles className="text-blue-300" size={38} />
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let’s build something innovative together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="p-8 bg-[#111827]/70 rounded-3xl backdrop-blur-md border border-blue-600/20 shadow-lg hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-semibold text-[#46BCEC] mb-6">
              Contact Info
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-[#46BCEC]" size={26} />
                <span className="text-gray-300">info@orixtech.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#3B82F6]" size={26} />
                <span className="text-gray-300">+92 328 1772607</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-[#60A5FA]" size={26} />
                <span className="text-gray-300">77 R Johar Town, Lahore</span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 w-full h-64 rounded-2xl overflow-hidden border border-blue-600/20">
              <iframe
                title="Orix Tech Location"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?q=77%20R%20Johar%20Town%2C%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Why Contact Us Box */}
          <div className="p-8 bg-[#111827]/50 rounded-3xl backdrop-blur-md border border-cyan-400/20 shadow-lg hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-[#46BCEC] mb-4">
              Why Contact Us?
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Launch your web or mobile app</li>
              <li>• Build AI-powered business tools</li>
              <li>• Transform backend & infrastructure</li>
              <li>• Develop SaaS, dashboards & automation</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-[#111827]/70 rounded-3xl backdrop-blur-md border border-blue-600/20 shadow-lg space-y-6 hover:scale-105 transition-transform duration-500"
        >
          <h2 className="text-3xl font-semibold text-[#46BCEC] mb-6">
            Send Us a Message
          </h2>

          <div>
            <label className="text-gray-300">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-4 rounded-xl bg-transparent border border-blue-500/20 outline-none focus:border-blue-400 transition"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-4 rounded-xl bg-transparent border border-blue-500/20 outline-none focus:border-blue-400 transition"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Message</label>
            <textarea
              rows="5"
              className="w-full mt-2 p-4 rounded-xl bg-transparent border border-blue-500/20 outline-none focus:border-blue-400 transition resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#46BCEC] to-[#3B82F6] hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
          >
            Send Message <Send size={20} />
          </button>
        </form>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }

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
      `}</style>
    </section>
  );
}
