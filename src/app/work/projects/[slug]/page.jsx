import projects from "@/lib/data/projects";
import ProjectModalClient from "./ProjectModalClient";

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return <div>Project not found</div>;

  return <ProjectModalClient project={project} />;
}


