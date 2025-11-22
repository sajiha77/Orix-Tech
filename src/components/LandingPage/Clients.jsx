"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import user1 from "../../../public/assets/landing-page/user1.webp";
import user2 from "../../../public/assets/landing-page/user2.webp";
import user3 from "../../../public/assets/landing-page/user3.jpg";
import user4 from "../../../public/assets/landing-page/user4.webp";

const testimonials = [
  {
    text: "Orix Tech completely transformed our digital presence. Their team delivered exceptional results that exceeded our expectations.",
    name: "Josh Nimmo",
    role: "COO, Manufacturing Company",
    img: user1,
  },
  {
    text: "They are experts in development and the entire product lifecycle. Better communication and execution than 99% of agencies I’ve worked with.",
    name: "Matthew",
    role: "CEO & Founder",
    img: user2,
  },
  {
    text: "Orix Tech reduced our processing time by 50% and automated most workflows. Transparent, proactive, and extremely reliable.",
    name: "Rebecca Lin",
    role: "Head of Operations",
    img: user3,
  },
  {
    text: "Strong stakeholder management and technical skills. Great communicator. A pleasure to work with every time.",
    name: "James Carter",
    role: "Product Manager",
    img: user4,
  },
];

const Clients = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#46BCEC10,transparent_60%)] blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-[#46BCEC]">
          What our<span className="text-foreground"> Clients </span>
          say
        </h2>
        <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
          Trusted by startups, enterprises, and global brands across the world.
        </p>

        {/* Auto Scroll Slider */}
        <motion.div
          className="flex gap-8 mt-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="min-w-[350px] max-w-[350px] bg-[#333333]
              border border-white/10 backdrop-blur-xl
              p-7 rounded-3xl cursor-pointer
              transition-all duration-500 shadow-[0_0_0_0_rgba(70,188,236,0.15)]
              hover:border-[#46BCEC]/60 hover:shadow-[0_0_35px_6px_rgba(70,188,236,0.25)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[#E4E4E4] leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={t.img}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                  alt={t.name}
                />
                <div>
                  <h4 className="font-semibold text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
