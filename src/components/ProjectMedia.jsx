import React from 'react';

export default function ProjectMedia({ project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] items-end overflow-hidden border border-line bg-surface p-6 sm:p-10">
      <span aria-hidden="true" className="absolute right-6 top-5 font-mono text-[clamp(6rem,17vw,13rem)] font-medium leading-none tracking-[-0.1em] text-ink/[0.035] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-3 sm:right-10 sm:top-7">{project.number}</span>
      <div className="relative z-10 max-w-[26rem]">
        <p className="label text-accent">{project.category}</p>
        <p className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.06em]">{project.name}</p>
        <span className="mt-8 block h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" />
      </div>
    </div>
  );
}
