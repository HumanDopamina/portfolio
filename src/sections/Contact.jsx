import Avatar from '../components/Avatar'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { buttonGhost, buttonPrimary } from '../components/buttonStyles'
import { ArrowRightIcon } from '../components/icons'
import { site } from '../data/site'

function Contact() {
  const { contact } = site

  return (
    <Section id="contacto" className="pb-16 pt-[clamp(2.5rem,6vw,4.5rem)]">
      <div className="grid grid-cols-1 min-[721px]:grid-cols-[1.5fr_0.85fr] min-[721px]:items-start min-[721px]:gap-x-[clamp(32px,4vw,56px)] min-[721px]:gap-y-0">
        <Reveal
          delay={80}
          className="min-[721px]:col-start-1 min-[721px]:row-start-1"
        >
          <span className="mb-5 block font-mono text-[0.9rem] text-accent max-[720px]:mb-4">
            {contact.eyebrow}
          </span>
          <h2 className="font-heading text-[clamp(2.1rem,4vw,3.2rem)] font-black leading-[1.05] tracking-[-0.025em] max-[720px]:text-[clamp(2.1rem,6.4vw,2.7rem)]">
            {contact.title}
            <span
              className="ml-[0.08em] inline-block h-[0.15em] w-[0.15em] bg-accent align-baseline"
              aria-hidden="true"
            />
          </h2>
        </Reveal>

        <Reveal
          delay={140}
          className="mt-[26px] min-[721px]:col-start-2 min-[721px]:row-span-2 min-[721px]:row-start-1 min-[721px]:mt-0 min-[721px]:self-center"
        >
          <Avatar className="mx-auto w-full max-w-[210px]" />
        </Reveal>

        <Reveal
          delay={180}
          className="min-[721px]:col-start-1 min-[721px]:row-start-2"
        >
          <p className="mt-5 max-w-[48ch] leading-[1.7] text-ink-soft">
            {contact.lead}
          </p>

          <div className="mt-[34px] flex flex-wrap gap-[14px] max-[720px]:mt-[26px]">
            <a className={`group ${buttonPrimary}`} href={`mailto:${site.email}`}>
              {contact.primaryCta}
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              className={buttonGhost}
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {contact.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mt-12 flex flex-wrap justify-end gap-[10px] border-t border-line pt-5 font-mono text-[0.74rem] text-muted min-[721px]:mt-[90px] min-[721px]:pb-6 min-[721px]:pt-6">
        <span>
          Copyright {new Date().getFullYear()} © {site.name}.{' '}
          {contact.footerNote}
        </span>
      </footer>
    </Section>
  )
}

export default Contact
