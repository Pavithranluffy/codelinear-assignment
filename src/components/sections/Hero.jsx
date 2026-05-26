"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* radial glow behind the right-side image */}
      <div className="absolute inset-0 bg-hero-glow opacity-80 pointer-events-none" />
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
             backgroundSize: '80px 80px'
           }} />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <h1 className="text-[clamp(2.25rem,5.2vw,4rem)] leading-[1.05] font-semibold tracking-tight text-white">
              The new foundation<br />of modern banking
            </h1>
            <p className="mt-6 text-white/55 text-base md:text-[15px] leading-relaxed max-w-md">
              We drive innovation and growth, provide seamless
              <br className="hidden md:block" />
              customer experience and operational excellence
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="btn-primary">Request Demo</a>
              <a href="#" className="btn-ghost">Contact Us</a>
            </div>
          </motion.div>

          {/* Right: composed photo (woman + floating UI cards baked in) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-10 bg-accent/25 blur-3xl rounded-full -z-0" />

            <div className="relative z-10">
              <Image
                src="/images/womenwithphone.png"
                alt="Toni Kross banking dashboard preview"
                width={1200}
                height={620}
                priority
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
