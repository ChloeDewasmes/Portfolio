import React from "react";

interface IconButtonProps {
  width?: number;
  height?: number;
  Icon: React.ReactNode; // Pass any SVG or icon as a React node
}

const IconButton: React.FC<IconButtonProps> = ({
  width = 164,
  height = 68,
  Icon,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 164 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:cursor-pointer"
    >
      {/* Button background */}
      <rect x="6" y="7" width="68" height="61" rx="6" fill="#99433A" />
      <rect x="0.5" y="0.5" width="67" height="60" rx="5.5" stroke="#D9D9D9" />

      {/* Icon centered inside the button */}
      <g
        className="translate-x-1/2 translate-y-1/2"
        transform={`translate(${width / 2 - 12}, ${height / 2 - 12})`}
      >
        {Icon}
      </g>
    </svg>
  );
};

export default IconButton;
