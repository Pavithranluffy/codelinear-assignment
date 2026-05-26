"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const offices = [
  {
    city: "London",
    address: "Linklia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const linkGroups = [
  {
    title: "Solutions",
    items: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    items: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    items: ["LinkedIn", "X"],
  },
];

export default function Footer() {
  const handleLinkClick = (e, item) => {
    const mappings = {
      "Core Banking CB7": "cb7-section",
      "Digital Banking N7": "digital-banking",
      "Solutions": "solutions",
      "Insights": "insights",
      "Contact": "contact",
      "About Us": "about-us",
    };

    const targetId = mappings[item];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    
    // Prevent default so that we do not jump/redirect to the top of the page
    e.preventDefault();
  };

  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: '#030A14' }}>
      {/* Main footer content */}
      <div className="container-wide pt-20 pb-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Big N7 logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="select-none"
          >
            <div
              className="text-[14rem] md:text-[16rem] font-bold leading-none tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #00C2FF 0%, #0A2BFA 100%)",
              }}
            >
              N7
            </div>
          </motion.div>

          {/* Right side */}
          <div className="space-y-12">
            {/* Offices */}
            <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
              {offices.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-sm font-semibold mb-2" style={{ color: '#7EB8D8' }}>{o.city}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(126,184,216,0.55)' }}>{o.address}</p>
                </motion.div>
              ))}
            </div>

            {/* Link columns */}
            <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
              {linkGroups.map((g) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-sm font-semibold mb-4" style={{ color: '#7EB8D8' }}>{g.title}</div>
                  <ul className="space-y-3">
                    {g.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          onClick={(e) => handleLinkClick(e, item)}
                          className="group inline-flex items-center gap-2 text-xs hover:text-white transition-colors"
                          style={{ color: 'rgba(126,184,216,0.6)' }}
                        >
                          {item}
                          <ArrowRight size={11} className="text-[#00AEFF] group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar with bottom glow */}
      <div className="relative">
        <div className="container-wide py-8">
          <p className="text-[11px] leading-relaxed text-left ml-auto max-w-3xl" style={{ color: 'rgba(126,184,216,0.35)' }}>
            Copyright © 2022 by Linklia Infosystems Limited — (CB7 and N7 as Commercial Brand) — (Registered under the Companies<br />Act 2006 in England and Wales | Number of Incorporation 13100992)
          </p>
        </div>

        {/* Bottom blue glow / shadow effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #0A4080 20%, #1070C0 50%, #0A4080 80%, transparent 100%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(16,112,192,0.12) 0%, transparent 100%)',
          }}
        />
      </div>
    </footer>
  );
}
