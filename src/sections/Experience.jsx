import { useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHead from '../components/SectionHead'
import { ArrowUpRightIcon } from '../components/icons'
import { site } from '../data/site'

const tabBase =
  'relative z-[1] flex h-[50px] shrink-0 items-center whitespace-nowrap px-[18px] text-left font-mono text-[0.84rem] transition-[color,background-color,box-shadow] duration-200 min-[721px]:hover:bg-surface min-[721px]:hover:shadow-[0_14px_34px_-16px_rgb(38_26_24_/_0.34)]'

function Experience() {
  const experience = site.experience
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const current = experience[active] ?? experience[0]

  const focusTab = (index) => {
    const next = (index + experience.length) % experience.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      focusTab(active + 1)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      focusTab(active - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(experience.length - 1)
    }
  }

  if (!current) return null

  return (
    <Section id="experiencia" className="py-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHead num="03" title="Experiencia" />

      <div className="grid grid-cols-1 gap-[clamp(24px,3vw,40px)] min-[721px]:grid-cols-[190px_1fr] min-[721px]:items-start">
        <div
          className="relative flex flex-row overflow-x-auto border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[721px]:flex-col min-[721px]:overflow-visible min-[721px]:border-b-0 min-[721px]:border-l"
          role="tablist"
          aria-label="Empresas"
        >
          {experience.map((item, index) => {
            const isActive = active === index

            return (
              <button
                key={item.company}
                type="button"
                role="tab"
                id={`exp-tab-${index}`}
                aria-selected={isActive}
                aria-controls="experiencia-panel"
                tabIndex={isActive ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                onClick={() => setActive(index)}
                onKeyDown={handleKeyDown}
                className={`${tabBase} ${
                  isActive
                    ? 'text-accent max-[720px]:shadow-[inset_0_-2px_0_var(--color-accent)]'
                    : 'text-muted min-[721px]:hover:text-ink'
                }`}
              >
                {item.company}
              </button>
            )
          })}

          <span
            className="absolute left-0 top-0 hidden h-[50px] w-0.5 bg-accent transition-[top] duration-300 ease-[cubic-bezier(.3,.7,.3,1)] min-[721px]:-left-px min-[721px]:block"
            style={{ top: `${active * 50}px` }}
            aria-hidden="true"
          />
        </div>

        <div
          id="experiencia-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${active}`}
          tabIndex={0}
          className="min-w-0"
        >
          <Reveal key={active} y={14}>
            <h3 className="font-heading text-[1.3rem] font-bold leading-tight tracking-[-0.01em] text-ink max-[640px]:text-[1.1rem]">
              {current.role}{' '}
              {current.url ? (
                <a
                  className="group inline-flex items-center gap-[5px] font-medium text-accent transition-colors hover:text-accent"
                  href={current.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">·</span>
                  <span>{current.company}</span>
                  <ArrowUpRightIcon className="transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]" />
                </a>
              ) : (
                <span className="font-medium text-accent">
                  <span aria-hidden="true">·</span> {current.company}
                </span>
              )}
            </h3>

            <p className="mb-[22px] mt-[6px] font-mono text-[0.78rem] text-muted">
              {current.period}
            </p>

            <ul className="flex list-none flex-col gap-[14px] max-[640px]:gap-3">
              {current.bullets.map((bullet, index) => (
                <Reveal
                  as="li"
                  key={bullet}
                  delay={80 + index * 80}
                  y={10}
                  className="flex gap-[14px] leading-[1.65] text-ink-soft max-[640px]:gap-3"
                >
                  <span
                    className="mt-[9px] size-2 shrink-0 bg-accent max-[640px]:size-1.5"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default Experience
