// components/SectionWave.tsx
import React from "react";

interface SectionWaveProps {
  bgColor: string;
  waveColor: string;
  children: React.ReactNode;
  id?: string;
  showBottomWave?: boolean;
}

const SectionWave: React.FC<SectionWaveProps> = ({
  bgColor,
  waveColor,
  children,
  id,
  showBottomWave = true,
}) => {
  return (
    <div
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw]"
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C360,0 1080,180 1440,60 L1440,0 L0,0 Z"
            fill={waveColor}
          />
        </svg>
      </div>

      {/* Contenu */}
      <div className="relative z-10 py-20 px-6 sm:px-16">{children}</div>

      {/* Bottom wave */}
      {showBottomWave && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 C360,0 1080,180 1440,60 L1440,0 L0,0 Z"
              fill={waveColor}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SectionWave;
