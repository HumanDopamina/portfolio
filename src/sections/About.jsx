import Avatar from '../components/Avatar'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHead from '../components/SectionHead'
import Tags from '../components/Tags'
import { site } from '../data/site'

function About() {
  const { about } = site

  return (
    <Section id="sobre-mi" className="py-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHead num="01" title="Sobre mí" />

      <div className="grid grid-cols-1 gap-6 min-[721px]:grid-cols-[1.5fr_0.85fr] min-[721px]:items-start min-[721px]:gap-x-[clamp(32px,4vw,56px)] min-[721px]:gap-y-[clamp(30px,3.4vw,46px)]">
        <div className="min-[721px]:col-start-1 min-[721px]:row-start-1 [&>p]:mb-4 [&>p]:leading-[1.75] [&>p]:text-muted [&>p:last-child]:mb-0">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={paragraph} delay={index * 100}>
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal
          as="aside"
          delay={120}
          className="order-first flex flex-col gap-[22px] min-[641px]:order-none min-[721px]:sticky min-[721px]:top-12 min-[721px]:col-start-2 min-[721px]:row-span-2 min-[721px]:row-start-1"
        >
          <Avatar className="mx-auto max-w-[260px]" />

          <dl className="flex flex-col">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-3 border-t border-line-soft py-[11px] first:border-t-0"
              >
                <dt className="font-mono text-[0.76rem] text-muted">
                  {fact.label}
                </dt>
                <dd className="text-right text-[0.88rem] font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="min-w-0 min-[721px]:col-start-1 min-[721px]:row-start-2">
          <h3 className="font-heading text-[clamp(1.15rem,1.8vw,1.4rem)] font-bold tracking-[-0.02em] text-ink">
            {about.capabilitiesTitle}
            <span
              className="ml-[0.08em] inline-block h-[0.15em] w-[0.15em] bg-accent align-baseline"
              aria-hidden="true"
            />
          </h3>

          <ul className="mt-[clamp(14px,1.8vw,20px)] grid list-none grid-cols-1 gap-[clamp(12px,1.4vw,16px)]">
            {about.capabilities.map((capability, index) => (
              <Reveal
                as="li"
                key={capability.title}
                delay={index * 120}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-[clamp(18px,1.7vw,22px)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-[5px] hover:border-accent/25 hover:shadow-[0_26px_54px_-30px_rgb(38_26_24_/_0.42)]"
              >
                <h4 className="font-heading text-[1.12rem] font-bold leading-[1.2] tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent">
                  {capability.title}
                </h4>
                <p className="mt-[9px] text-[0.9em] leading-[1.6] text-muted">
                  {capability.desc}
                </p>

                <Tags tags={capability.tags} className="mt-auto pt-4" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default About
