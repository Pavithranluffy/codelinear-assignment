"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FeatureX } from "@/components/ui/Icons";

const featured = {
  category: "GETTING STARTED",
  title: "How to transition from a traditional to a digital bank",
  author: "David Grohl",
  date: "17/08/24",
};

const articles = [
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function Insights() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Get yourself up-to-speed on<br />all the things happening in<br />fintech
            </h2>
            <a href="#" className="btn-ghost mt-8 inline-flex">Insights</a>
          </motion.div>

          {/* Right grid */}
          <div className="lg:col-span-2 grid gap-5">
            {/* Featured (large) */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-dark p-5 grid sm:grid-cols-2 gap-5 hover:border-accent/30 transition-colors"
            >
              <FeatureCardImage />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-btn uppercase text-white/55 mb-2">
                    {featured.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium leading-snug mb-3">
                    {featured.title}
                  </h3>
                  <div className="text-[11px] font-mono text-white/55">
                    {featured.author} &nbsp;&nbsp; {featured.date}
                  </div>
                </div>
                <a href="#" className="btn-ghost mt-6 text-center justify-center w-full">Read More</a>
              </div>
            </motion.article>

            {/* Two smaller */}
            <div className="grid sm:grid-cols-2 gap-5">
              {articles.map((a, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-dark p-5 flex flex-col hover:border-accent/30 transition-colors"
                >
                  <div className="text-[10px] font-mono tracking-btn uppercase text-white/55 mb-2">
                    {a.category}
                  </div>
                  <h3 className="text-lg font-medium leading-snug mb-3 flex-1">{a.title}</h3>
                  <div className="text-[11px] font-mono text-white/55 mb-5">
                    {a.author} &nbsp;&nbsp; {a.date}
                  </div>
                  <a href="#" className="btn-ghost w-full text-center justify-center">Read More</a>
                </motion.article>
              ))}
            </div>

            <div className="flex justify-end">
              <a href="#" className="link-underline">
                Read All Insights <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCardImage() {
  return (
    <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br from-[#0E1B2E] to-[#091321] relative">
      <img
        src="/images/transitionlogo.png"
        alt="Transition"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
