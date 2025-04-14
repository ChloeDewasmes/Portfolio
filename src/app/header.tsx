"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State pour afficher/masquer le menu

  return (
    <header className="flex justify-between w-full mb-34">
      {/* Logo ou titre */}
      <span className="hide-on-landscape text-light-grey text-lg sm:text-2xl font-semibold whitespace-nowrap mr-12">
        Chloe Dewasmes
      </span>

      {/* Menu classique (Desktop) */}
      <div className="hidden [@media(min-aspect-ratio:1/1)]:flex text-light-grey text-xl gap-6 hide-desktop-menu">
        <a
          href="#about"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-white hover:font-semibold hover:cursor-pointer"
        >
          Contact
        </a>
      </div>

      {/* Menu Burger (Mobile) */}
      <button
        className="content-end [@media(min-aspect-ratio:1/1)]:hidden text-light-grey show-burger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={32} />
      </button>

      {/* Menu déroulant (Mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Conteneur du menu */}
          <div className="bg-background-blue flex flex-col items-center gap-6 text-light-grey text-lg py-8 w-full max-w-xs relative">
            {/* Bouton de fermeture (croix) */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMenuOpen(false)} // Ferme le menu au clic
            >
              <X size={16} />
            </button>

            {/* Liens du menu */}
            <a
              href="#about"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)} // Ferme le menu au clic
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-white hover:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Projects
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
