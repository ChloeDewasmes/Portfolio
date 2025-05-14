export const allProjects = [
  {
    id: "portfolio",
    name: "Portfolio.",
    date: "Avril 2025",
    src: "/images/portfolio.png",
    description: "Première version de mon portfolio...",
    stack: {
      language: "Typescript",
      front: ["React", "NextJS", "Tailwind CSS"],
      versionning: ["Git", "GitHub"],
    },
    gallery: [
      "../../../images/contact.png",
      "/images/portfolio.png",
      {
        thumbnail: "/images/demo-thumb.jpg",
        video: "/videos/demo.mp4",
      },
    ],
  },
  {
    id: "les-petits-explorateurs",
    name: "Les Petits Explorateurs.",
    date: "Mars 2024",
    src: "/images/LPE.png",
    description: "Un moteur de blog custom...",
    stack: {
      language: "Javascript",
      front: ["React Native", "Redux", "Expo"],
      back: ["Node.js", "Express.js"],
      db: "MongoDB",
      versionning: ["Git", "GitHub"],
    },
  },
  {
    id: "safehub",
    name: "SafeHub.",
    date: "Mai-Septembre 2024",
    src: "/images/safehub.png",
    description: "Un moteur de blog custom...",
    stack: {
      language: "Typescript",
      front: ["React Native", "React"],
      back: ["Node.js", "Express.js", "NextJS"],
      db: "MongoDB",
      versionning: ["Git", "GitHub"],
    },
  },
  {
    id: "reading-tracker",
    name: "Reading Tracker.",
    date: "Avril 2025",
    src: "/images/readingTracker.png",
    description: "Un moteur de blog custom...",
    stack: {
      language: "Javascript",
      front: ["React Native", "Expo"],
      back: ["Node.js", "Express.js"],
      db: "MongoDB",
      versionning: ["Git", "GitHub"],
    },
  },
];
