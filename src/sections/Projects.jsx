import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-space pt-8 sm:pt-10">
      <div className="page-pad">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-4">
          <div>
            <p className="label">01 / Work</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Selected work</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
            Four projects spanning travel planning, agriculture, climate modeling, and security.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
