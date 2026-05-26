"use client";

import { motion } from "framer-motion";

export default function CB7CTA() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 border border-white/[0.06] px-8 md:px-14 py-12 md:py-16"
        >
          {/* Watermark */}
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-full md:w-3/4 flex items-center justify-end select-none pointer-events-none z-0 opacity-80"
          >
            <img
              src="/images/CB7.png"
              alt=""
              className="h-[120%] w-auto object-contain object-right"
            />
          </div>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Take the full advantage of<br />going paper-less now.
              </h3>
              <p className="mt-4 text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                CB7 helps your financial institution improve the client experience,
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
