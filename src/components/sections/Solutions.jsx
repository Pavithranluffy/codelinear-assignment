"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  IconCoreBanking,
  IconDigitalBanking,
  IconOpenBanking,
  IconLoanOrigination,
  IconLoanManagement,
} from "@/components/ui/Icons";

const solutions = [
  {
    icon: "/images/corebanking.png",
    title: "Core Banking CB7",
    tag: null,
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "/images/digitalbanking.png",
    title: "Digital Banking N7",
    tag: null,
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/images/openbankinglogo.png",
    title: "Open Banking",
    tag: null,
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "/images/loanlogo.png",
    title: "Loan Origination System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/images/loanlogo.png",
    title: "Loan Management System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              All of our solutions are<br />tailor-made to your needs
            </h2>
            <a href="#" className="btn-ghost mt-8 inline-flex">
              Request Demo
            </a>
          </motion.div>

          {/* Right column — solutions grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-14">
            {solutions.map((sol, i) => {
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <img
                      src={sol.icon}
                      alt={sol.title}
                      className="w-10 h-10 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {sol.tag && (
                      <span className="text-[10px] font-mono tracking-btn uppercase text-white/55 mt-1">
                        {sol.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{sol.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">
                    {sol.description}
                  </p>
                  <a href="#" className="link-underline">
                    Learn More <ArrowRight size={12} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
