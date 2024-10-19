import React from "react";

interface ButtonProps {
  text: string; // Props for button text
  width?: number; // Optional width
  height?: number; // Optional height
}

const Button: React.FC<ButtonProps> = ({ text, width = 164, height = 68 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 164 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="7" width="158" height="61" rx="6" fill="#99433A" />
      <rect x="0.5" y="0.5" width="157" height="60" rx="5.5" stroke="#D9D9D9" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#D9D9D9"
        fontSize="20"
        fontWeight="normal"
      >
        {text}
      </text>
    </svg>
  );
};

export default Button;
