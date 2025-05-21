import React, { useState, CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: () => void;
};

const GalleryPreviewWithLoader: React.FC<Props> = ({
  src,
  alt,
  className = "",
  style,
  onMouseEnter,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative inline-block">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={style}
        onMouseEnter={onMouseEnter}
      />
    </div>
  );
};

export default GalleryPreviewWithLoader;
