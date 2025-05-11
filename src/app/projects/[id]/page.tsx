import { notFound } from "next/navigation";
import { allProjects } from "../../data/projects-data";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-500 text-sm">{project.date}</p>
      <img
        src={project.src}
        alt={project.name}
        className="rounded-xl shadow-md my-6"
      />
      <p className="mb-4">{project.description}</p>
      <p className="text-sm text-gray-600">Stack: {project.stack}</p>
    </div>
  );
}
