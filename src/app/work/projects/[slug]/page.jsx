import projects from "@/lib/data/projects";
import ProjectModalClient from "./ProjectModalClient";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return <div>Project not found</div>;

  return <ProjectModalClient project={project} />;
}

