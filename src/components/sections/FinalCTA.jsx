"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="pb-20 md:pb-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center px-2 md:px-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
