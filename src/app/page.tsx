import Header from "./header";
import Image from "next/image";
import Profile from "./public/images/profile.png";
import Contact from "./public/images/contact.png";
import Programming from "./public/images/programming.png";
import Button from "./components/Button";
import { Linkedin, Github } from "lucide-react";
import ScrollToTopButton from "./components/scrollToTopButton";

export default function Home() {
  return (
    <div className="bg-background-blue font-poppins px-6 sm:px-16">
      <header className="h-[30px] flex items-center z-50 relative">
        <Header />
      </header>

      <div className="flex flex-col items-center justify-center [@media(min-aspect-ratio:1/1)]:flex-row-reverse h-[90vh]">
        {/* Contenu principal */}
        <div className="flex justify-center py-6 [@media(min-aspect-ratio:1/1)]:w-1/2">
          <Image
            className="object-contain min-h-[250px] max-w-[80%] max-h-[80vh] [@media(max-aspect-ratio:1/1)]:max-h-[50vh]"
            src={Profile}
            alt="Profile picture"
            priority
          />
        </div>

        {/* Titre et liens */}
        <div className="text-light-grey text-center w-full [@media(min-aspect-ratio:1/1)]:w-1/2">
          <div className="w-full space-y-4 pb-clamp text-clamp [@media(min-aspect-ratio:1/1)]:text-left">
            <p>Hello, I'm Chloe,</p>
            <h1 className="leading-none title-text-clamp font-extralight bg-gradient-to-br from-light-grey via-light-grey to-dark-grey bg-clip-text text-transparent text-wrap">
              Web Developer
            </h1>
            <p>based in France.</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1dPVVsRLzPHbnTCyWSt5hFijbl-e6YjaV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Resume" />
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/chloe-dewasmes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group">
                  <Linkedin
                    className="text-light-grey group-hover:opacity-0"
                    size={48}
                    style={{ strokeWidth: 0.5 }}
                  />
                  <Linkedin
                    className="text-light-grey absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                    size={48}
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
              </a>
              <a
                href="https://github.com/ChloeDewasmes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group">
                  <Github
                    className="text-light-grey group-hover:opacity-0"
                    size={48}
                    style={{ strokeWidth: 0.5 }}
                  />
                  <Github
                    className="text-light-grey absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                    size={48}
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="min-h-screen py-20" id="about">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-6">
          about.
        </h1>
        <div className="text-light-grey text-xl sm:text-2xl space-y-6">
          <p>
            💻 Fullstack Developer passionnée par le design et l'expérience
            utilisateur.
          </p>
          <p>
            🎓 Ancienne ingénieure chimiste reconvertie dans le développement.
          </p>
          <p>🔍 À la recherche de nouvelles opportunités.</p>
        </div>
      </div>

      <div className="min-h-screen py-20" id="skills">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-6">
          skills.
        </h1>
        <div className="text-light-grey text-xl sm:text-2xl space-y-6">
          Liste de mes compétences...
        </div>
      </div>

      <div className="min-h-screen py-20" id="projects">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-6">
          projects.
        </h1>
        <div className="text-light-grey text-xl sm:text-2xl space-y-6">
          Présentation de mes projets...
        </div>
      </div>

      <div className="min-h-screen py-20" id="contact">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-6">
          contact.
        </h1>
        <Image
          src={Contact}
          alt="Contact illustration"
          className="w-full sm:w-1/3 object-cover mx-auto"
        />
        <p className="mt-6 text-justify text-light-grey text-xl sm:text-2xl">
          I am available to discuss any opportunities and projects. I’m eager to
          hear from you!
        </p>
        <div className="mt-6 text-light-grey text-xl sm:text-2xl flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="flex whitespace-nowrap">📧 chloe.dewasmes@itech.fr</p>
          <p className="flex whitespace-nowrap">📞 +33 6 18 40 76 93</p>
        </div>
      </div>

      <div>
        <a
          className="flex items-end bottom-0 text-dark-salmon"
          href="https://lucide.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Icons by Lucide
        </a>
        <a
          className="flex items-end bottom-0 text-dark-salmon"
          href="https://storyset.com/computer"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Illustrations by Storyset
        </a>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
