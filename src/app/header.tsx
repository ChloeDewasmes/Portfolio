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
    <header className="relative w-full mb-34 h-[30px] flex items-center justify-between">
      {/* Burger menu */}
      <button
        className="[@media(min-aspect-ratio:1/1)]:hidden text-light-grey show-burger-menu group"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu
          className="transition-all duration-200"
          size={28}
          style={{ strokeWidth: 1.5 }}
        />
        <Menu
          className="absolute transition-all duration-200 opacity-0 group-hover:opacity-100"
          size={28}
          style={{ strokeWidth: 2.5 }}
        />
      </button>

      {/* Desktop Menu */}
      <div className="hidden [@media(min-aspect-ratio:1/1)]:flex items-center text-light-grey gap-6 hide-desktop-menu justify-center w-full">
        {/* Name on left */}
        <div className="absolute left-0">
          <span className="text-md lg:text-xl font-semibold">
            Chloé Dewasmes
          </span>
        </div>

        {/* Navigation links centered */}
        <div className="flex gap-6 ml-20 text-xl">
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
      </div>

      {/* Lang Button */}
      <button
        onClick={toggleLang}
        className="text-light-grey hover:text-white hover:font-semibold text-md lg:text-xl"
      >
        {lang === "en" ? "FR" : "EN"}
      </button>

      {/* Menu déroulant (mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-background-blue flex flex-col items-center gap-6 text-light-grey text-lg py-8 w-full max-w-xs relative">
            <button
              className="absolute top-4 right-4 text-white group"
              onClick={() => setMenuOpen(false)}
            >
              <X
                size={16}
                className="transition-opacity duration-200 group-hover:opacity-0"
                style={{ strokeWidth: 1.5 }}
              />
              <X
                size={16}
                className="absolute top-0 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ strokeWidth: 3 }}
              />
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
