import { useState } from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      className="sm:w-[160px] sm:h-[60px] lg:w-[180px] lg:h-[80px] min-w-[120px] min-h-[50px]" // Taille dynamique avec taille minimale
      viewBox="0 0 164 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)} // On hover
      onMouseLeave={() => setIsHovered(false)} // On mouse leave
      style={{ cursor: "pointer" }}
    >
      {/* Button background */}
      <rect x="6" y="7" width="158" height="61" rx="6" fill="#99433A" />

      {/* Border with dynamic stroke width and transition */}
      <rect
        x="0.5"
        y="0.5"
        width="157"
        height="60"
        rx="5.5"
        stroke="#D9D9D9"
        strokeWidth={isHovered ? "3" : "1"} // Thicker border on hover
        style={{ transition: "stroke-width 0.3s ease" }} // Smooth transition for stroke width
      />

      {/* Button Text with dynamic font weight and transition */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#D9D9D9"
        fontSize="clamp(1.2rem, 4vw, 1.3rem)"
        fontWeight={isHovered ? "bold" : "normal"}
        style={{ transition: "font-weight 0.3s ease" }}
      >
        {text}
      </text>
    </svg>
  );
};

export default Button;
