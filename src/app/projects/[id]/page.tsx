"use client";
import { notFound } from "next/navigation";
import { allProjects } from "../../data/projects-data";
import { useState } from "react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
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

        <p className="my-6 text-white">{project.description}</p>
        <p className="text-sm text-light-salmon">Stack: {project.stack}</p>
      </div>
    </div>
  );
}
