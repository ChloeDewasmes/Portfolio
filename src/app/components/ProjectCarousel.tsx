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
  const { lang } = useLang();
  const text = translations[lang].page;

  const projects = [
    {
      id: 1,
      src: LPE,
      name: "Les Petits Explorateurs",
      date: text.projects.dateLPE,
      description: text.projects.lpe,
      stack: "React Native, Node.js, Express, Redux, MongoDB",
    },
    {
      id: 2,
      src: Safehub,
      name: "SafeHub",
      date: text.projects.dateSafehub,
      description: text.projects.safehub,
      stack: "Typescript, React, React Native, Next, MongoDB",
    },
    {
      id: 3,
      src: Portfolio,
      name: "Portfolio",
      date: text.projects.datePortfolio,
      description: text.projects.portfolio,
      stack: "Typescript, React, TailwindCSS",
    },
    {
      id: 4,
      src: readingTracker,
      name: "Reading Tracker",
      date: text.projects.dateReadingTracker,
      description: text.projects.readingTracker,
      stack: "React Native, Node.js, Express, MongoDB",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: -12,
        stretch: -40,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {projects.map((project) => (
        <SwiperSlide
          key={project.id}
          className="flex justify-center items-center"
        >
          <div className="flex flex-col items-center">
            <div className="relative group h-full w-[30vw] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={project.src}
                alt={project.name}
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p>{project.stack}</p>
              </motion.div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-light-grey">
              {project.name}
            </h3>
            <p className="mb-4 text-sm text-gray-500">{project.date}</p>
            <div className="mb-14">
              <Button text={text.projects.goButton} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
