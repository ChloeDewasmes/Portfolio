"use client";

import Header from "./header";
import Image from "next/image";
import Profile from "../../public/images/profile.png";
import Contact from "../../public/images/contact.png";
import Programming from "../../public/images/programming.png";
import Button from "./components/Button";
import ProjectCarousel from "./components/ProjectCarousel";
import { Linkedin, Github, HardDriveDownload } from "lucide-react";
import ScrollToTopButton from "./components/scrollToTopButton";
import { AnimatedStack } from "./components/animated-stack";
import QualitiesMarquee from "./components/QualitiesMarquee";
import FadeInSection from "./components/FadeInSection";
import SectionWave from "./components/SectionWave";
import { useLang } from "./LangContext";
import translations from "./translations";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./components/aurora-background";
import { AnimatedEmoji } from "./components/animated-emoji";

export default function Home() {
  const { lang } = useLang();
  const text = translations[lang].page;

  return (
    <div className="bg-background-blue font-poppins px-6 sm:px-16 py-4 overflow-hidden">
      <header className="h-[30px] flex items-center z-50 relative">
        <Header />
      </header>

      <AuroraBackground className="-mt-[60px]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center"
        >
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
                <p>{text.hero.greeting}</p>
                <h1 className="leading-none title-text-clamp font-extralight bg-gradient-to-br from-light-grey via-light-grey to-black bg-clip-text text-transparent text-wrap">
                  {text.hero.job}
                </h1>
                <p>{text.hero.location}</p>
              </div>

              <div className="flex flex-row portrait-tall:flex-col items-center gap-6 [@media(max-aspect-ratio:1/1)]:justify-center">
                <a
                  href="https://drive.google.com/file/d/1dPVVsRLzPHbnTCyWSt5hFijbl-e6YjaV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button text={text.hero.resumeButton} />
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/chloe-dewasmes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative group">
                      <Linkedin
                        className="text-light-grey group-hover:opacity-0 icon-responsive"
                        style={{ strokeWidth: 0.5 }}
                      />
                      <Linkedin
                        className="text-light-grey absolute top-0 left-0 opacity-0 group-hover:opacity-100 icon-responsive"
                        style={{ strokeWidth: 1.2 }}
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
                        className="text-light-grey group-hover:opacity-0 icon-responsive"
                        style={{ strokeWidth: 0.5 }}
                      />
                      <Github
                        className="text-light-grey absolute top-0 left-0 opacity-0 group-hover:opacity-100 icon-responsive"
                        style={{ strokeWidth: 1.2 }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Sections */}
      <FadeInSection id="about">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black">
          {text.about.title}
        </h1>
        <div className="flex items-center justify-center my-12 min-w-[55vw]">
          <div className="relative flex flex-col items-center justify-center bg-dark-salmon text-lg sm:text-xl text-center text-white rounded-xl h-full p-4 lg:p-8">
            <p>
              Actuellement en recherche d'une alternance pour Juillet 2025 ou
              d’un poste en CDD/CDI.
            </p>
            <p>Disponible de suite.</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-light-grey mb-12 lg:mb-24">
          <div className="leading-relaxed text-white text-xl sm:text-2xl">
            <p className="mb-8 text-center">
              <strong className="bg-gradient-to-r from-light-salmon via-salmon-pink to-dark-salmon bg-clip-text text-transparent">
                Développeuse Fullstack
              </strong>
              , j’associe mes compétences en{" "}
              <AnimatedEmoji
                word="résolution de problèmes"
                emoji="🧠"
                animation="bump"
              />
              , en{" "}
              <AnimatedEmoji
                word="logique technique"
                emoji="⚙️"
                animation="spinZ"
              />{" "}
              à mon goût pour le{" "}
              <AnimatedEmoji word="design" emoji="🎨" animation="bump" /> et
              l’expérience utilisateur.
            </p>
            <p className="text-center">
              Ce qui m’anime : contribuer à des projets{" "}
              <AnimatedEmoji word="concrets" emoji="🌿" animation="bump" />,{" "}
              <AnimatedEmoji word="exigeants" emoji="🛰️" animation="bump" /> et{" "}
              <AnimatedEmoji
                word="porteurs de sens"
                emoji="🌍"
                animation="spinY"
              />
              .
            </p>
          </div>
        </div>
        <div className="my-12 mx-auto">
          <QualitiesMarquee />
        </div>
      </FadeInSection>

      <SectionWave bgColor="#20252B" waveColor="#1B1F24" id="skills">
        <FadeInSection id="skills">
          <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-6 pt-[5vh]">
            {text.skills.title}
          </h1>
          <div className="flex items-center pb-[8vh]">
            <div>
              <div className="text-justify mb-9 text-light-grey text-xl sm:text-2xl space-y-6 md:w-[50vw]">
                {text.skills.description}
                <AnimatedEmoji word="." emoji="🚀" animation="bump" />
              </div>
              <AnimatedStack />
            </div>
            <Image
              src={Programming}
              alt="Programming illustration"
              className="hidden md:flex mx-auto w-[40vw] max-w-[500px]"
            />
          </div>
        </FadeInSection>
      </SectionWave>

      <FadeInSection id="projects">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-20 sm:mb-8">
          {text.projects.title}
        </h1>
        <div className="text-light-grey text-xl sm:text-2xl space-y-6">
          {text.projects.description}
        </div>
        <div className="mt-12 sm:mt-8">
          <ProjectCarousel />
        </div>
      </FadeInSection>

      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#181B1F]">
        <SectionWave
          bgColor="#181B1F"
          waveColor="#1B1F24"
          id="contact"
          showBottomWave={false}
        >
          <FadeInSection id="contact">
            <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mt-[8vh]">
              contact.
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src={Contact}
                alt="Contact illustration"
                className="w-[25vw] min-w-[300px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="mt-6 text-center md:text-justify text-light-grey text-xl sm:text-2xl">
                  {text.contact.opportunities}
                </p>
                <div className="mt-16 text-light-grey text-xl sm:text-2xl flex flex-col gap-2 sm:gap-4 items-center md:items-start">
                  <p className="flex whitespace-nowrap">
                    <span className="mr-2">📧</span>
                    <a
                      href="mailto:chloe.dewasmes@itech.fr"
                      className="hover:text-salmon-pink hover:underline"
                    >
                      chloe.dewasmes@itech.fr
                    </a>
                  </p>
                  <p className="flex whitespace-nowrap">
                    <span className="mr-2">📞</span>
                    <a
                      href="tel:+33618407693"
                      className="hover:text-salmon-pink hover:underline"
                    >
                      +33 6 18 40 76 93
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </SectionWave>

        {/* Wave at the bottom 
        <div className="pointer-events-none w-full flex flex-col items-center text-salmon-pink mb-[4vh]">
          {[...Array(2)].map((_, i) => (
            <svg
              key={i}
              width="80"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-wiggle"
            >
              <path
                d="M0 10 C20 0, 40 20, 60 10 S100 10, 100 10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ))}
        </div>*/}

        <div className="bg-[#181B1F] px-6 sm:px-16">
          <a
            className="flex items-end bottom-2 text-dark-salmon"
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.credits.lucide}
          </a>
          <a
            className="flex items-end bottom-0 text-dark-salmon"
            href="https://storyset.com/computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.credits.storyset}
          </a>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
