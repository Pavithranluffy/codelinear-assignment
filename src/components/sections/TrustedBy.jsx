"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "SHELLS", src: "/images/shelllogo.png" },
  { name: "SmartFinder", src: "/images/smartfinderlogo.png" },
  { name: "Zoomerr", src: "/images/zoomerlogo.png" },
  { name: "ArtVenue", src: "/images/artvenuelogo.png" },
  { name: "kontrastr", src: "/images/kontrastrlogo.png" },
  { name: "WAVESMARATHON", src: "/images/wavesmarathonlogo.png" },
];

export default function TrustedBy() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[11px] font-mono tracking-btn uppercase text-white/55 mb-6">
            Trusted By:
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 text-white/45">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-sm font-medium opacity-85 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-5 w-auto object-contain brightness-0 invert"
                />
                <span className="text-white/70">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
