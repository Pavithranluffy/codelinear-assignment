"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FeatureX } from "@/components/ui/Icons";

const studies = [
  { category: "GETTING STARTED", title: "How we help brand reach out to more people", brand: "Zoomerr" },
  { category: "GETTING STARTED", title: "Scaling product launches across new markets", brand: "Zoomerr" },
  { category: "GETTING STARTED", title: "Modernising a legacy banking stack", brand: "Zoomerr" },
  { category: "GETTING STARTED", title: "Building an open banking API platform", brand: "Zoomerr" },
];

export default function CaseStudies() {
  const [index, setIndex] = useState(0);
  const total = studies.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12 md:mb-16"
        >
          Our Case Studies
        </motion.h2>

        <div className="relative">
          {/* Peek cards (decorative) */}
          <div aria-hidden className="absolute left-0 top-0 bottom-0 w-12 md:w-32 opacity-20 pointer-events-none flex items-center">
            <div className="card-dark overflow-hidden w-40 h-44 flex items-center justify-center">
              <img src="/images/transitionlogo.png" alt="" className="w-full h-full object-cover opacity-40" />
            </div>
          </div>
          <div aria-hidden className="absolute right-0 top-0 bottom-0 w-12 md:w-32 opacity-20 pointer-events-none flex items-center justify-end">
            <div className="card-dark overflow-hidden w-40 h-44 flex items-center justify-center">
              <img src="/images/transitionlogo.png" alt="" className="w-full h-full object-cover opacity-40" />
            </div>
          </div>

          {/* Active card */}
          <div className="mx-auto max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="card-dark p-5 grid sm:grid-cols-2 gap-5 items-center"
              >
                <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br from-[#0E1B2E] to-[#091321] relative">
                  <img
                    src="/images/transitionlogo.png"
                    alt="Transition"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-btn uppercase text-white/55 mb-2">
                    {studies[index].category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium leading-snug mb-4">
                    {studies[index].title}
                  </h3>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center text-[8px] text-ink-900 font-bold">⚡</div>
                    <span className="text-sm text-white/70">{studies[index].brand}</span>
                  </div>
                  <a href="#" className="btn-ghost w-full text-center justify-center">Read More</a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 relative flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/45 transition-all"
            >
              <ArrowLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {studies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/45 transition-all"
            >
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="md:absolute md:right-0">
            <a href="#" className="link-underline">
              View All <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
