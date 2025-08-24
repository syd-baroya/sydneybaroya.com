export default function ProjectLayout({ project, children }) {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.subtitle}</p>
      {children}
    </main>
  );
}
