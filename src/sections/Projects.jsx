import { useState } from 'react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHead from '../components/SectionHead'
import Tags from '../components/Tags'
import { ArrowUpRightIcon, PlusIcon } from '../components/icons'
import { site } from '../data/site'

const projectCard =
  'group grid grid-cols-1 gap-3 border-t border-line py-6 transition-[background-color,border-color,box-shadow,transform] duration-300 first:border-t-0 hover:z-[1] hover:scale-[1.018] hover:rounded-sm hover:border-transparent hover:bg-surface hover:shadow-[0_22px_48px_-28px_rgb(38_26_24_/_0.32)] min-[560px]:-mx-5 min-[560px]:grid-cols-[84px_1fr] min-[560px]:gap-[clamp(20px,3vw,40px)] min-[560px]:px-5 min-[560px]:py-[30px]'

function Projects() {
  const projects = site.projects
  const [showAll, setShowAll] = useState(false)

  const hiddenCount = projects.filter((project) => project.hidden).length
  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => !project.hidden)

  return (
    <Section id="proyectos" className="py-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHead num="04" title="Proyectos" />

      <div className="flex flex-col">
        {visibleProjects.map((project, index) => (
          <Reveal
            as="article"
            className={projectCard}
            key={project.name}
            delay={index * 100}
          >
            <div className="flex flex-row items-baseline gap-3.5 min-[560px]:flex-col min-[560px]:gap-1.5 min-[560px]:pt-1">
              <span className="font-heading text-2xl font-semibold text-line transition-colors duration-300 group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[0.72rem] text-muted">
                {project.year}
              </span>
            </div>

            <div className="min-w-0">
              <p className="mb-2 font-mono text-[0.76rem] text-accent">
                {project.kind}
              </p>

              <h3 className="font-heading text-2xl font-black leading-[1.18] tracking-[-0.02em] max-[559px]:text-[1.2rem]">
                {project.url ? (
                  <a
                    className="inline-flex items-start gap-[9px] transition-colors duration-200 group-hover:text-accent"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRightIcon className="mt-1.5 text-muted transition-[transform,color] duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:text-accent" />
                  </a>
                ) : (
                  <span>{project.name}</span>
                )}
              </h3>

              <p className="mt-3 max-w-[56ch] leading-[1.7] text-ink-soft">
                {project.description}
              </p>

              <Tags tags={project.tags} className="mt-[18px]" />
            </div>
          </Reveal>
        ))}
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-center border-t border-line pt-7">
          <button
            type="button"
            className="group inline-flex items-center gap-[13px] font-mono text-[0.8rem] font-medium text-muted transition-colors duration-200 hover:text-accent"
            aria-expanded={showAll}
            onClick={() => setShowAll((value) => !value)}
          >
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-full bg-accent text-on-accent transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.3,.7,.3,1)] group-hover:scale-105 group-hover:shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-accent)_16%,transparent)] ${
                showAll ? 'rotate-[135deg]' : ''
              }`}
              aria-hidden="true"
            >
              <PlusIcon />
            </span>
            <span className="group-hover:underline group-hover:underline-offset-4">
              {showAll ? 'Ver menos proyectos' : 'Ver más proyectos'}
            </span>
          </button>
        </div>
      )}
    </Section>
  )
}

export default Projects
