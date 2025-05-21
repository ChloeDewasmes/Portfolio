export const allProjects = [
  {
    id: "portfolio",
    name: "Portfolio.",
    date: "Avril 2025",
    src: "/images/portfolio.png",
    description: "projects.portfolioDescription",
    stack: {
      language: "Typescript",
      front: ["React", "NextJS", "Tailwind CSS"],
      back: [],
      db: [],
      versionning: ["Git", "GitHub"],
    },
    gallery: [],
  },
  {
    id: "les-petits-explorateurs",
    name: "Les Petits Explorateurs.",
    date: "Mars 2024",
    src: "/images/LPE.png",
    description: "projects.lpeDescription",
    stack: {
      language: "Javascript",
      front: ["React Native", "Redux", "Expo"],
      back: ["Node.js", "Express.js"],
      db: ["MongoDB"],
      versionning: ["Git", "GitHub"],
    },
    gallery: [
      "../../../images/LPE/screen1.jpg",
      "../../../images/LPE/screen2.jpg",
      "../../../images/LPE/screen3.jpg",
      "../../../images/LPE/screen4.jpg",
      {
        thumbnail: "/images/LPEdemo.png",
        video: "/demos/LPE.mp4",
      },
    ],
  },
  {
    id: "safehub",
    name: "SafeHub.",
    date: "Mai-Septembre 2024",
    src: "/images/safehub.png",
    description: "projects.safehubDescription",
    stack: {
      language: "Typescript",
      front: ["React Native", "React"],
      back: ["Node.js", "Express.js", "Next.js"],
      db: ["MongoDB"],
      versionning: ["Git", "GitHub"],
    },
    links: {
      appStore: "https://apps.apple.com/fr/app/safehub/id1667989239",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.ponzi.etheia&hl=en-US&pli=1",
    },
    gallery: [
      "../../../images/safehub/screen1.png",
      {
        thumbnail: "../../../images/safehub/linkedinLink.png",
        main: "../../../images/safehub/linkedinPost.png",
        link: "https://www.linkedin.com/posts/tristan-groene_%F0%9D%97%A8%F0%9D%97%A1-%F0%9D%97%A6%F0%9D%97%A7%F0%9D%97%94%F0%9D%97%9A%F0%9D%97%98-%F0%9D%97%A5%F0%9D%97%98%F0%9D%97%A8%F0%9D%97%A6%F0%9D%97%A6%F0%9D%97%9C-%F0%9D%97%96%F0%9D%97%9B%F0%9D%97%98%F0%9D%97%AD-activity-7255260922921865217-k88B?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJbQuYB-I9_g748tCNzCrZFB_gw4QU1AcI",
      },
    ],
  },
  {
    id: "reading-tracker",
    name: "Reading Tracker.",
    date: "Avril 2025",
    src: "/images/readingTracker.png",
    description: "projects.readingTrackerDescription",
    stack: {
      language: "Javascript",
      front: ["React Native", "Expo"],
      back: ["Node.js", "Express.js"],
      db: ["MongoDB"],
      versionning: ["Git", "GitHub"],
    },
    gallery: [
      "../../../images/readingTracker/screen1.png",
      "../../../images/readingTracker/screen2.png",
      "../../../images/readingTracker/screen3.png",
      "../../../images/readingTracker/screen4.png",
      "../../../images/readingTracker/screen5.png",
      {
        thumbnail: "/images/readingTrackerDemo.png",
        video: "/demos/readingTracker.mp4",
      },
    ],
  },
];
