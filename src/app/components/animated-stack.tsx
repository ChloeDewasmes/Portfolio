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
      name: "React",
      image: "/images/logo/react.png",
    },
    {
      id: 5,
      name: "Type Script",
      image: "/images/logo/ts.png",
    },

    {
      id: 6,
      name: "Tailwind CSS",
      image: "/images/logo/tailwind.png",
    },

    {
      id: 7,
      name: "ReactNative",
      image: "/images/logo/react-native.png",
    },

    {
      id: 8,
      name: "Express JS",
      image: "/images/logo/express.png",
    },

    {
      id: 9,
      name: "Node JS",
      image: "/images/logo/node-js.png",
    },
    {
      id: 10,
      name: "Next JS",
      image: "/images/logo/next.png",
    },
    {
      id: 11,
      name: "Expo",
      image: "/images/logo/expo.png",
    },
    {
      id: 12,
      name: "MongoDB",
      image: "/images/logo/mongoDB.png",
    },
  ];

  return (
    <div className="hidden md:flex items-center mjustify-center pt-10 px-6 border-t-2 border-slate-800">
      <AnimatedTooltip items={AllSkills} />
    </div>
  );
}
