"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#333333] text-white pt-24 pb-12 overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#46BCEC] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#1B7FC1] opacity-20 blur-[150px] rounded-full"></div>

      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#46BCEC] to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Upper CTA Bar */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#B0B0B0]">
            Let’s Build Something Great Together
          </h3>
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 rounded-full font-semibold text-white shadow-lg transition-transform duration-300 animate-gradient-x"
          >
            Get in Touch{" "}
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="max-w-[130px] hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/assets/header/logo-light.png"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-[#B0B0B0] leading-relaxed">
              Empowering your digital journey with exceptional design,
              development & cutting-edge innovation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-white/10 hover:bg-[#46BCEC] transition-all duration-300 group"
                >
                  <Icon
                    size={18}
                    className="text-white group-hover:text-black"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-4 text-[#46BCEC] font-semibold text-lg">
              Company
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="footer-link">
                  How We Work
                </Link>
              </li>

              <li>
                <Link href="/terms-of-service" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="footer-link">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-[#46BCEC] font-semibold text-lg">
              Services
            </h2>
            <ul className="space-y-2">
              {[
                "Web Development",
                "AI & Automation",
                "Mobile Apps",
                "UI / UX Design",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="footer-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h2 className="mb-4 text-[#46BCEC] font-semibold text-lg">
              Contact
            </h2>
            <ul className="space-y-2">
              {[
                "+92 328 1772607",
                "info@orix-tech.com",
                "77 R Johar Town, Lahore",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="footer-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <h2 className="mt-10 mb-4 text-[#46BCEC] font-semibold text-lg">
              Legal
            </h2>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="footer-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-[#A0A0A0]">
          © 2024 Orix Tech — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
