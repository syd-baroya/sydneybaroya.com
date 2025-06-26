import PROJECT_CARDS from '@/data/projectCards';

export async function generateStaticParams() {
  return PROJECT_CARDS.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = PROJECT_CARDS.find((p) => p.slug === params.slug);
  if (!project) return <div>Not found</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{project.cardTitle}</h1>
      <img src={project.img[0]} alt={project.cardTitle} />
      <p>{project.info}</p>
    </div>
  );
}
