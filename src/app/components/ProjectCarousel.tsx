"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import LPE from "../../../public/images/LPE.png";
import Safehub from "../../../public/images/safehub.png";
import Portfolio from "../../../public/images/portfolio.png";
import readingTracker from "../../../public/images/readingTracker.png";
import Button from "./Button";
import { useLang } from "../LangContext";
import translations from "../translations";

export default function ProjectCarousel() {
  const router = useRouter();
  const swiperRef = useRef<any>(null);
  const { lang } = useLang();
  const text = translations[lang].page;

  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "les-petits-explorateurs",
      src: LPE,
      name: "Les Petits Explorateurs",
      date: text.projects.dateLPE,
      description: text.projects.lpeDescription,
      stack: "React Native, Node.js, Express, Redux, MongoDB",
    },
    {
      id: "safehub",
      src: Safehub,
      name: "SafeHub",
      date: text.projects.dateSafehub,
      description: text.projects.safehub,
      stack: "Typescript, React, React Native, Next, MongoDB",
    },
    {
      id: "portfolio",
      src: Portfolio,
      name: "Portfolio",
      date: text.projects.datePortfolio,
      description: text.projects.portfolio,
      stack: "Typescript, React, TailwindCSS",
    },
    {
      id: "reading-tracker",
      src: readingTracker,
      name: "Reading Tracker",
      date: text.projects.dateReadingTracker,
      description: text.projects.readingTracker,
      stack: "React Native, Node.js, Express, MongoDB",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        coverflowEffect={{
          rotate: -12,
          stretch: -40,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide
              key={project.id}
              onClick={(e) => {
                e.stopPropagation();
                if (isActive) {
                  router.push(`/projects/${project.id}`);
                } else {
                  swiperRef.current?.slideToLoop(index);
                }
              }}
              className="flex justify-center items-center cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`relative w-[60vw] lg:w-[30vw] rounded-xl shadow-lg transition-transform duration-300 ${
                    isActive ? "hover:scale-105 group" : ""
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={project.name}
                    className="object-cover"
                  />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <p>{project.stack}</p>
                    </motion.div>
                  )}
                </div>
                <h3 className="mt-6 sm:mt-4 text-xl font-bold text-light-grey text-center">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                <div
                  className={`mb-14 ${
                    isActive ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                  <Button text={text.projects.goButton} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom arrows */}
      <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-dark-salmon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-12 sm:h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-dark-salmon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-12 sm:h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Pagination dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #737373 !important; /* dark grey */
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #ff6f61 !important; /* salmon pink */
        }
      `}</style>
    </div>
  );
}
