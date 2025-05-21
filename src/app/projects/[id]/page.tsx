"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { allProjects } from "../../data/projects-data";
import MainImageWithLoader from "../../components/MainImageWithLoader";
import GalleryPreviewWithLoader from "../../components/GalleryPreviewWithLoader";
import { useLang } from "../../LangContext";
import translations from "../../translations";
import { useState, useEffect } from "react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

function get(path: string, obj: any): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

type GalleryItem =
  | string
  | {
      main?: string;
      thumbnail: string;
      link?: string;
      video?: string;
    };

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromIndex = searchParams.get("fromIndex") || "0";
  const { lang } = useLang();
  const text = translations[lang].page;

  const { id } = use(params); // unwrap the Promise
  const project = allProjects.find((p) => p.id === id);

  const [mainImage, setMainImage] = useState<GalleryItem | null>(null);
  const [, setHoveredIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // update mainImage when project changes
  useEffect(() => {
    if (project) {
      setMainImage(project.src);
      setIsLoaded(false);
    }
  }, [project]);

  if (!project) return notFound();

  const galleryItems: GalleryItem[] = [project.src, ...(project.gallery || [])];

  // Determine if mainImage is a video or string
  const isMainVideo =
    mainImage != null && typeof mainImage === "object" && "video" in mainImage;

  return (
    <div className="min-h-screen bg-background-blue">
      <div className="p-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft
            onClick={() => router.push(`/?activeSlide=${fromIndex}#projects`)}
            className="text-salmon-pink cursor-pointer w-10 h-10"
          />
          <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-2 text-right">
            {project.name}
          </h1>
        </div>
        <p key={project.id} className="text-light-salmon text-sm mb-4">
          {get(project.date, text)}
        </p>

        <div className="flex justify-center rounded-xl shadow-md overflow-hidden mb-4">
          {mainImage ? (
            typeof mainImage !== "string" && "link" in mainImage ? (
              <a
                href={mainImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <MainImageWithLoader
                  src={mainImage.main || mainImage.thumbnail}
                  alt="Main"
                  isVideo={false}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            ) : (
              <MainImageWithLoader
                src={
                  typeof mainImage === "string"
                    ? mainImage
                    : mainImage.main || mainImage.thumbnail
                }
                alt="Main"
                isVideo={isMainVideo}
                videoSrc={
                  isMainVideo
                    ? (mainImage as { video: string }).video
                    : undefined
                }
                style={{ maxWidth: "100%" }}
              />
            )
          ) : null}
        </div>

        {[project.src, ...(project.gallery || [])].length > 1 && (
          <div className="flex gap-4 overflow-auto pb-2">
            {galleryItems.map((img, index) => {
              const isObject = typeof img === "object" && img !== null;
              const isVideo = isObject && "video" in img;
              const isLink = isObject && "link" in img;

              const thumbnail = isObject ? img.thumbnail : img;

              const handleMouseEnter = () => {
                setMainImage(img);
                setHoveredIndex(index);
              };

              const previewContent = (
                <GalleryPreviewWithLoader
                  src={thumbnail}
                  alt={`Preview ${index}`}
                  className={`h-16 sm:h-20 w-auto rounded-md shadow hover:scale-105 transition-transform border border-white m-1 ${
                    isVideo || isLink ? "cursor-pointer" : ""
                  }`}
                  style={{ maxWidth: "none" }}
                  onMouseEnter={handleMouseEnter}
                />
              );

              if (isVideo) {
                return (
                  <a
                    key={index}
                    href={(img as { video: string }).video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {previewContent}
                  </a>
                );
              }

              if (isLink) {
                return (
                  <a
                    key={index}
                    href={(img as { link: string }).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {previewContent}
                  </a>
                );
              }

              return <div key={index}>{previewContent}</div>;
            })}
          </div>
        )}

        <div>
          <p
            key={project.id}
            className="my-6 text-white text-md sm:text-xl text-justify whitespace-pre-line"
          >
            {get(project.description, text)}
          </p>
        </div>
        {project.id === "safehub" && project.links && (
          <div className="flex gap-4 mb-6 text-white text-sm sm:text-base items-center">
            <Download className="text-light-salmon w-5 h-5" />
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-salmon-pink hover:underline"
            >
              App Store
            </a>
            <p>-</p>
            <a
              href={project.links.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-salmon-pink hover:underline"
            >
              Google Play
            </a>
          </div>
        )}
        <div className="space-y-2">
          {/* First Row: Language, Frontend, Backend */}
          <div className="flex flex-wrap font-normal gap-2">
            {/* Language - Light Blue */}
            <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">
              {project.stack.language}
            </span>

            {/* Frontend - Light Rose */}
            {project.stack.front.map((tech) => (
              <span
                key={tech}
                className="bg-rose-200 text-rose-900 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}

            {/* Backend - Light Amber */}
            {project.stack.back.map((tech) => (
              <span
                key={tech}
                className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Second Row: Database, Versioning */}
          <div className="flex flex-wrap font-normal gap-2">
            {/* Database - Light Green */}
            {project.stack.db.map((tech) => (
              <span
                key={tech}
                className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}

            {/* Versioning - Light Violet */}
            {project.stack.versionning.map((tech) => (
              <span
                key={tech}
                className="bg-violet-200 text-violet-900 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
