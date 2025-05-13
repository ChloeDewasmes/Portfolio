"use client";
import React from "react";
import { AnimatedTooltip } from "../components/animated-tooltip";

export function AnimatedStack() {
  const AllSkills = [
    {
      id: 1,
      name: "HTML 5",
      image: "/images/logo/HTML5.png",
    },
    {
      id: 2,
      name: "CSS 3",
      image: "/images/logo/CSS3.png",
    },
    {
      id: 3,
      name: "Java Script",
      image: "/images/logo/js.png",
    },
    {
      id: 4,
      name: "Type Script",
      image: "/images/logo/ts.png",
    },
    {
      id: 5,
      name: "React & React Native",
      image: "/images/logo/react.png",
    },
    {
      id: 6,
      name: "Node JS",
      image: "/images/logo/node-js.png",
    },
    {
      id: 7,
      name: "Express JS",
      image: "/images/logo/express.png",
    },
    {
      id: 8,
      name: "Next JS",
      image: "/images/logo/next.png",
    },
    {
      id: 9,
      name: "MongoDB",
      image: "/images/logo/mongoDB.png",
    },
    {
      id: 10,
      name: "Expo",
      image: "/images/logo/expo.png",
    },
    {
      id: 11,
      name: "Tailwind CSS",
      image: "/images/logo/tailwind.png",
    },
  ];

  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 540;

  return (
    <div className="flex items-center justify-center pt-10 pr-4 md:w-[50vw]">
      <AnimatedTooltip items={AllSkills} size={isSmallScreen ? "sm" : "md"} />
    </div>
  );
}
