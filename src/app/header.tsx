"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State pour afficher/masquer le menu

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-background-blue">
      {/* Logo ou titre */}
      <text className="text-light-grey text-2xl font-semibold whitespace-nowrap mr-12">
        Chloe Dewasmes
      </text>

      {/* Menu classique (Desktop) */}
      <div className="hidden md:flex text-light-grey text-xl gap-6">
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
        className="md:hidden text-light-grey text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
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
