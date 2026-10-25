import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectMedia from './ProjectMedia';
import { isConfiguredUrl, withHttps } from '../utils/links';
import { reveal, useMotionSafe } from '../utils/motion';

export default function ProjectCard({ project, onOpenModal, index }) {
  const { initial, viewport } = useMotionSafe();
  const imageLeft = index % 2 === 0;
  const github = isConfiguredUrl(project.github) ? withHttps(project.github) : null;
  const demo = isConfiguredUrl(project.liveDemo) ? withHttps(project.liveDemo) : null;

  return (
    <motion.article
      variants={reveal}
      initial={initial}
      whileInView="visible"
      viewport={viewport}
      id={`project-${project.id}`}
      className="group grid grid-cols-1 items-center gap-8 border-t border-line py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24 first:border-t-0 first:pt-0"
    >
      <div className={`lg:col-span-7 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`Open details for ${project.name}`}
        >
          <ProjectMedia project={project} />
        </button>
      </div>

      <div className={`lg:col-span-5 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <p className="label">{project.number} / {project.category}</p>
        <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="text-left link-underline"
          >
            {project.name}
          </button>
        </h3>
        <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
          {project.description}
        </p>
        {project.contribution && (
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink">
            {project.contribution}
          </p>
        )}
        <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology} className="label text-[9px] tracking-[0.12em]">{technology}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          <button type="button" onClick={() => onOpenModal(project)} className="link-underline label">
            Details
          </button>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline label">
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="link-underline label">
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
