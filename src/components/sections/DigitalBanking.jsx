"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "@/components/ui/Icons";

export default function DigitalBanking() {
  return (
    <section id="digital-banking" className="relative bg-gradient-to-b from-[#EEF4FB] via-[#E8F0F9] to-[#EEF4FB] text-ink-900 py-20 md:py-28 overflow-hidden">
      {/* decorative concentric line patterns */}
      <DecorLines />

      {/* Background vector graphics */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* N7 outline centered behind top layout */}
        <img
          src="/images/beneathn7.png"
          alt=""
          className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] h-auto opacity-90"
        />

        {/* Clover/leftside vector on the left */}
        <img
          src="/images/leftsidevector.png"
          alt=""
          className="absolute left-0 top-[32%] w-[40%] max-w-[500px] h-auto opacity-95"
        />

        {/* Giant 7 outline on the bottom right */}
        <img
          src="/images/7.png"
          alt=""
          className="absolute right-0 bottom-[2%] w-[40%] max-w-[500px] h-auto opacity-95"
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Row 1 — heading + phone (home) + compliance bullets */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Digital banking<br />out-of-the-box
            </h2>
            <p className="mt-5 text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
              N7 helps your financial institution improve the client
              experience, automate and optimize procedures
            </p>
            <div className="mt-8 flex flex-col gap-5 items-start">
              <a href="#" className="btn-primary">Request Demo</a>
              <a href="#" className="link-underline">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Image
              src="/images/phone1.png"
              alt="Digital banking app — home screen"
              width={300}
              height={620}
              className="w-[230px] md:w-[260px] h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-6"
          >
            <h3 className="text-lg font-semibold mb-3">Fully compliant with regulatory requirement</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              The governance of risk management with regulations is achieved by our
              risk management framework that is fully integrated to work with digital
              bank's operational-risk protocols and procedures.
            </p>
            <div className="space-y-3">
              {["Pre-integrated Security System",
                "Fully Compliant With Regulatory Requirement",
                "Digitally Connected Core"].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2 — bullets (center) + phone (chart, right) */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-2"
          >
            <h3 className="text-lg font-semibold mb-3">No legacy IT systems</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Our Digital Banking solution and multilayered approach help financial
              institutions take advantage of digital transformation by ensuring
              customer trust and regulatory compliance.
            </p>
            <div className="space-y-3">
              {["Adaptive & Intelligent API monetization",
                "Ambient User Experience",
                "Cloud-native With lower TCO"].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-start-3 flex justify-center"
          >
            <Image
              src="/images/phone2.png"
              alt="Digital banking app — chart screen"
              width={300}
              height={620}
              className="w-[230px] md:w-[260px] h-auto"
            />
          </motion.div>
        </div>

        {/* Row 3 — phone (profile, center) + bullets (right) */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-start-2 flex justify-center"
          >
            <Image
              src="/images/phone3.png"
              alt="Digital banking app — profile screen"
              width={300}
              height={620}
              className="w-[230px] md:w-[260px] h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-3"
          >
            <h3 className="text-lg font-semibold mb-3">No traditional branches</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Our Digital Banking out-of-the-box helps you to accelerate innovation
              while reducing risks and optimising operational costs for a seamless
              branchless experience.
            </p>
            <div className="space-y-3">
              {["Branchless & Paperless Banking",
                "Digital Transformation Capability",
                "Optimized, Adoptable and Scalable"].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DecorLines() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="160" height="160" patternUnits="userSpaceOnUse">
          <circle cx="80" cy="80" r="200" stroke="#B8CFE6" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
