import Link from "next/link";
import React from "react";
import mockup from "../../../public/assets/landing-page/img1.png";
import client1 from "../../../public/assets/landing-page/client1.png";
import client2 from "../../../public/assets/landing-page/client2.png";
import client3 from "../../../public/assets/landing-page/client3.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -left-20 -top-36 w-[420px] h-[420px] rounded-full blur-[140px] bg-[#46BCEC] opacity-12 pointer-events-none" />
      <div className="absolute right-0 top-24 w-[360px] h-[360px] rounded-full blur-[120px] bg-[#1B7FC1] opacity-12 pointer-events-none" />
      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Build future-ready products{" "}
              <span className="text-[#46BCEC]">faster</span>
            </h1>
            <p className="text-[#B0B0B0] max-w-xl">
              Orix Tech blends product design, AI, and engineering to launch
              scalable apps and intelligent systems that grow with your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-foreground font-semibold shadow-xl transform transition hover:scale-105 animate-cta-gradient"
                aria-label="Contact Orix Tech"
              >
                Start a Project
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 text-primary font-medium border border-white/8 hover:bg-white/6 transition"
                aria-label="See case studies"
              >
                See Work
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="text-[#B0B0B0]">Trusted by</div>
              <div className="flex gap-6 items-center">
                {/* placeholders for logos */}
                <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center text-xs text-[#B0B0B0]">
                  <Image
                    src={client1}
                    className="rounded"
                    alt="Client Logo"
                    width={100}
                    height={30}
                  />
                </div>
                <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center text-xs text-[#B0B0B0]">
                  <Image
                    src={client2}
                    className="rounded"
                    alt="Client Logo"
                    width={100}
                    height={30}
                  />{" "}
                </div>
                <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center text-xs text-[#B0B0B0]">
                  <Image
                    src={client3}
                    className="rounded"
                    alt="Client Logo"
                    width={100}
                    height={30}
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* hero visual / mockup card */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md transform transition hover:scale-[1.02]">
              <div className="rounded-3xl bg-gradient-to-br from-white/3 to-white/6 p-6 shadow-2xl backdrop-blur-sm border border-white/6">
                <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-[#061018] group">
                  <Image
                    src={mockup}
                    alt="App mockup"
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* shine animation */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                  />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#B0B0B0]">
                      AI-Powered Dashboard
                    </div>
                    <div className="font-semibold">Insight · Predict · Act</div>
                  </div>
                  <div className="text-xs text-[#46BCEC] font-medium">Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* container */}
    </section>
  );
};

export default Hero;
