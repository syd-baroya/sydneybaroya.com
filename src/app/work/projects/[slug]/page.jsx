import projects from "@/lib/data/projects";
import ProjectModalClient from "./ProjectModalClient";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return <ProjectModalClient project={project} />;
}
