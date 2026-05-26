"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !mobileOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 transition-all duration-300 ease-in-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="container-wide">
        <nav
          className={`mx-auto flex items-center justify-between
            rounded-full border border-white/10 transition-all duration-300
            ${scrolled ? "bg-ink-900/85 backdrop-blur-md" : "bg-ink-800/60 backdrop-blur-sm"}
            px-5 md:px-6 py-2.5 max-w-3xl`}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-white font-bold text-xl tracking-tight select-none"
            aria-label="N7 home"
          >
            N7
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className="flex items-center gap-1 text-sm text-white/85 hover:text-white transition-colors font-mono tracking-wider uppercase text-[11px]">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={12} />}
                </button>
              </li>
            ))}
          </ul>

          {/* Request demo */}
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center
                       rounded-full border border-white/25 text-white
                       font-mono text-[11px] tracking-btn uppercase
                       px-4 py-2 hover:bg-white/5 hover:border-white/45
                       transition-all"
          >
            Request Demo
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-3 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-ink-800/95 backdrop-blur-md p-5">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button className="flex items-center justify-between w-full text-sm text-white/85 hover:text-white transition-colors font-mono tracking-wider uppercase text-xs">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} />}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#"
                  className="block text-center rounded-full border border-white/25 text-white font-mono text-xs tracking-btn uppercase px-4 py-2.5"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
