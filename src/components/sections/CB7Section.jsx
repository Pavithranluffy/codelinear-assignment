"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "@/components/ui/Icons";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CB7Section() {
  return (
    <section id="cb7-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Giant "CB7" watermark behind */}
      <div
        aria-hidden
        className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none"
      >
        <span className="text-[18vw] md:text-[15vw] font-bold tracking-tighter text-transparent"
              style={{ WebkitTextStroke: '1px rgba(45,127,249,0.12)' }}>
          CB7
        </span>
      </div>

      <div className="container-wide relative">
        {/* Top: Heading + AML dashboard (extends beyond right edge in original) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
              A complete cloud-based<br />core banking.
            </h2>
            <p className="mt-5 text-white/55 text-sm md:text-base leading-relaxed max-w-md">
              Faster time to market with our cloud-based
              <br />core banking services
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#" className="btn-primary">Request Demo</a>
              <a href="#" className="link-underline">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:-mr-20 xl:-mr-32"
          >
            <Image
              src="/images/dashboardONe.png"
              alt="Core Banking Dashboard one preview"
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom: CKYC dashboard (extends beyond left edge) + features list */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:-ml-20 xl:-ml-32"
          >
            <Image
              src="/images/DashboardTwo.png"
              alt="Core Banking Dashboard two preview"
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-medium leading-snug tracking-tight">
              Run a more efficient, flexible,and digitally<br className="hidden md:block" />
              connected corebanking system
            </h3>

            <div className="mt-8">
              <div className="text-sm font-medium text-white mb-5">What you will get:</div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/70 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
