"use client";
import { notFound } from "next/navigation";
import { allProjects } from "../../data/projects-data";
import { useLang } from "../../LangContext";
import translations from "../../translations";
import { useState } from "react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

function get(path: string, obj: any): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { lang } = useLang();
  const text = translations[lang].page;

  const project = allProjects.find((p) => p.id === params.id);
  const [mainImage, setMainImage] = useState(project?.src);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background-blue">
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-salmon-pink text-4xl sm:text-7xl font-black mb-2 text-right">
          {project.name}
        </h1>
        <p className="text-light-salmon text-sm mb-4">{project.date}</p>

        <div className="rounded-xl shadow-md overflow-hidden mb-4">
          <img src={mainImage} alt="Main" className="w-full rounded-xl" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[project.src, ...(project.gallery || [])].map((img, index) =>
            typeof img === "string" ? (
              <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                className="h-20 w-auto rounded-md shadow cursor-pointer hover:scale-105 transition-transform"
                onMouseEnter={() => setMainImage(img)}
              />
            ) : (
              // Video thumbnail with link
              <a
                key={index}
                href={img.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img.thumbnail}
                  alt="Video preview"
                  className="h-20 w-auto rounded-md shadow cursor-pointer hover:scale-105 transition-transform border border-white"
                  onMouseEnter={() => setMainImage(img.thumbnail)}
                />
              </a>
            )
          )}
        </div>

        <div>
          {allProjects.map((project) => (
            <p key={project.id} className="my-6 text-white">
              {get(project.description, text)}
            </p>
          ))}
        </div>
        <div className="space-y-2">
          {/* First Row: Language, Frontend, Backend */}
          <div className="flex flex-wrap gap-2">
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
          <div className="flex flex-wrap gap-2">
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
