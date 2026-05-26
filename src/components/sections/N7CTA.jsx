"use client";

import { motion } from "framer-motion";

export default function N7CTA() {
  return (
    <section className="bg-[#EEF4FB] py-12 md:py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 to-[#06101D] border border-white/[0.06] px-8 md:px-14 py-12 md:py-16 text-white"
        >
          {/* Watermark N7 */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-end pr-8 select-none pointer-events-none overflow-hidden"
          >
            <span
              className="text-[24vw] md:text-[18rem] font-bold leading-none text-transparent"
              style={{ WebkitTextStroke: '1px rgba(45,127,249,0.22)' }}
            >
              N7
            </span>
          </div>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Take the full advantage of<br />going paper-less now.
              </h3>
              <p className="mt-4 text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                N7 helps your financial institution improve the client experience,
                automate and optimize procedures, simplify banking operations
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a href="#" className="btn-ghost">Contact Us</a>
              <a href="#" className="btn-primary">Request Demo</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
