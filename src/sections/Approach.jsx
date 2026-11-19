import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHead from '../components/SectionHead'
import { buttonPrimary } from '../components/buttonStyles'
import { ArrowRightIcon } from '../components/icons'
import { site } from '../data/site'

function Approach() {
  const { approach } = site

  return (
    <Section id="enfoque" className="py-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHead num="02" title="Intereses" />

      <Reveal className="mb-[clamp(2.125rem,5vw,3.5rem)]">
        <h3 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-black leading-[1.08] tracking-[-0.025em] max-[640px]:text-[clamp(1.7rem,8vw,2.2rem)]">
          {approach.titleLead}
          <span className="text-accent">
            {approach.titleAccent}
            <span
              className="ml-[0.08em] inline-block h-[0.15em] w-[0.15em] bg-accent align-baseline"
              aria-hidden="true"
            />
          </span>
        </h3>
        <p className="mt-[18px] max-w-[52ch] leading-[1.7] text-ink-soft max-[640px]:mt-3.5 max-[640px]:leading-[1.68]">
          {approach.lead}
        </p>
      </Reveal>

      <ol className="mt-2.5 grid list-none grid-cols-1 gap-[26px] min-[641px]:grid-cols-2 min-[641px]:gap-x-[30px] side:grid-cols-4 side:gap-[clamp(18px,2.4vw,30px)]">
        {approach.steps.map((step, index) => {
          const isGoal = index === approach.steps.length - 1

          return (
            <Reveal
              as="li"
              key={step.label}
              delay={index * 100}
              className="flex flex-col gap-2.5"
            >
              <span
                className="mb-2 flex items-center gap-2.5 max-[640px]:mb-1"
                aria-hidden="true"
              >
                <span
                  className={`shrink-0 ${
                    isGoal
                      ? '-my-0.5 size-[13px] border-[3px] border-accent bg-transparent'
                      : 'size-[9px] bg-accent'
                  }`}
                />
                <span className="h-px flex-1 bg-line" />
              </span>

              <span className="font-mono text-[0.74rem] font-medium uppercase tracking-[0.08em] text-accent">
                {step.label}
              </span>
              <h4 className="font-heading text-[1.08rem] font-black leading-[1.22] tracking-[-0.015em]">
                {step.title}
              </h4>
              <p className="text-[0.9em] leading-[1.6] text-ink-soft">
                {step.desc}
              </p>
            </Reveal>
          )
        })}
      </ol>

      <Reveal className="mt-[clamp(2.375rem,5vw,3.625rem)] flex flex-wrap items-center justify-between gap-[18px_28px] border-t border-line pt-[26px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:pt-[22px]">
        <p className="max-w-[44ch] font-heading text-[clamp(1rem,1.7vw,1.18rem)] font-medium leading-[1.5] tracking-[-0.01em]">
          {approach.quote}
        </p>
        <a className={`group ${buttonPrimary}`} href="#contacto">
          {approach.cta}
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </Section>
  )
}

export default Approach
