"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#333333] " : "bg-[#fff]"
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="max-w-[120px] md:max-w-[150px] relative z-10">
          <Image
            src={
              scrolled
                ? "/assets/header/logo-light.png"
                : "/assets/header/logo-dark.png"
            }
            alt="logo"
            width={142}
            height={117}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 z-10">
          <Navbar scrolled={scrolled} />
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 rounded-full font-semibold text-white shadow-lg transition-transform duration-300 animate-gradient-x"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden relative z-10">
          <button
            onClick={toggleMobileNav}
            className={`focus:outline-none p-2 rounded-md transition ${
              scrolled ? "text-[#46BCEC]" : "text-white"
            } hover:bg-white/10`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && <MobileNav onClose={toggleMobileNav} />}
    </header>
  );
};

export default Header;
