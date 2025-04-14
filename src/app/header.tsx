"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "./LangContext";
import translations from "./translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Show-Hide menu
  const { lang, toggleLang } = useLang();
  const text = translations[lang].header;

  return (
    <header className="relative flex items-center justify-between w-full mb-34 h-[30px]">
      {/* Burger menu */}
      <button
        className="[@media(min-aspect-ratio:1/1)]:hidden text-light-grey show-burger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Desktop Menu */}
      <div className="hidden [@media(min-aspect-ratio:1/1)]:flex items-center gap-8 hide-desktop-menu text-light-grey text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-lg sm:text-2xl font-semibold whitespace-nowrap">
          Chloé Dewasmes
        </span>
        <a
          href="#about"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          {text.about}
        </a>
        <a
          href="#skills"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          {text.skills}
        </a>
        <a
          href="#projects"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          {text.projects}
        </a>
        <a
          href="#contact"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          Contact
        </a>
      </div>

      <button
        onClick={toggleLang}
        className="text-light-grey text-sm font-medium hover:text-white text-lg sm:text-xl"
      >
        {lang === "en" ? "FR" : "EN"}
      </button>

      {/* Menu déroulant (mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-background-blue flex flex-col items-center gap-6 text-light-grey text-lg py-8 w-full max-w-xs relative">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={16} />
            </button>

            <a
              href="#about"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {text.about}
            </a>
            <a
              href="#skills"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {text.skills}
            </a>
            <a
              href="#projects"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {text.projects}
            </a>
            <a
              href="#contact"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
