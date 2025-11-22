"use client";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

const links = [
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Training", path: "#training" },
  { name: "Blog", path: "#blog" },
];

const MobileNav = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (path) => {
    setActiveLink(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#333333] flex flex-col justify-center items-center animate-slide-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition"
      >
        <X size={32} className="text-[#46BCEC]" />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col justify-center items-center gap-8 z-10">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`text-2xl font-semibold transition-colors duration-300 ${
              activeLink === link.path ? "text-[#46BCEC]" : "text-white"
            } hover:text-[#46BCEC]`}
            onClick={() => handleClick(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
