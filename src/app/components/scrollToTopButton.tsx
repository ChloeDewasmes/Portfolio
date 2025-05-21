"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import { SquareArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show button when scrolling down 100px
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-10 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <div className="icon-wrapper relative group">
        <SquareArrowUp
          className="icon text-light-grey"
          size={48}
          style={{ strokeWidth: 0.5 }}
        />

        {/* Thicker icon for hover effect */}
        <SquareArrowUp
          className="icon text-light-grey absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          size={48}
          style={{ strokeWidth: 1.5 }}
        />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
