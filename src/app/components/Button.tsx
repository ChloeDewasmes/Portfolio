"use client";

import React, { useState } from "react";

interface ButtonProps {
  width?: number;
  height?: number;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ width = 164, height = 68, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 164 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)} // On hover
      onMouseLeave={() => setIsHovered(false)} // On mouse leave
      style={{ cursor: "pointer" }} // Ensure cursor changes to pointer
    >
      {/* Button background */}
      <rect x="6" y="7" width="158" height="61" rx="6" fill="#99433A" />

      {/* Border with dynamic stroke width */}
      <rect
        x="0.5"
        y="0.5"
        width="157"
        height="60"
        rx="5.5"
        stroke="#D9D9D9"
        strokeWidth={isHovered ? "3" : "1"} // Thicker border on hover
      />

      {/* Button Text with dynamic font weight */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#D9D9D9"
        fontSize="20"
        fontWeight={isHovered ? "bold" : "normal"} // Bold font on hover
      >
        {text}
      </text>
    </svg>
  );
};

export default Button;
