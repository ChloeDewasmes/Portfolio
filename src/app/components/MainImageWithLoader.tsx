import React, { useState, CSSProperties } from "react";

interface MainImageWithLoaderProps {
  src: string;
  isVideo: boolean;
  videoSrc?: string;
  alt?: string;
  style?: CSSProperties;
}

const MainImageWithLoader: React.FC<MainImageWithLoaderProps> = ({
  src,
  isVideo,
  videoSrc,
  alt,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isVideo && videoSrc) {
    return (
      <video
        src={videoSrc}
        className="max-h-[40vh] sm:max-h-[60vh] w-auto rounded-xl"
        style={style}
        controls
        autoPlay
        muted
        onCanPlay={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <div className="relative flex justify-center rounded-xl shadow-md overflow-hidden mb-4">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt || "Main"}
        onLoad={() => setIsLoaded(true)}
        className={`max-h-[40vh] sm:max-h-[60vh] w-auto rounded-xl transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={style}
      />
    </div>
  );
};

export default MainImageWithLoader;
