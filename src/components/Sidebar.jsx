import { useEffect, useState } from 'react'
import { site } from '../data/site'
import Reveal from './Reveal'
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
} from './icons'

const navLinkBase =
  'group flex items-center gap-4 py-2 font-mono text-muted transition-colors duration-200 hover:text-ink'

const socialLink =
  'grid size-10 place-items-center rounded-[10px] border border-line bg-surface text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent'

function Sidebar({ active = 'inicio', onNavigate }) {
  const [open, setOpen] = useState(false)

  // Bloquea el scroll y permite cerrar con Escape cuando el menú está abierto.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleNav = (event, id) => {
    event.preventDefault()
    setOpen(false)

    const target = document.getElementById(id)
    if (!target) return

    onNavigate?.(id)

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <button
        type="button"
        className="fixed left-[18px] top-[calc(18px+env(safe-area-inset-top))] z-[95] inline-flex size-[46px] items-center justify-center rounded-[11px] border border-line bg-surface/85 text-ink shadow-[0_6px_18px_-12px_rgb(0_0_0_/_0.5)] backdrop-blur-[8px] transition duration-150 hover:-translate-y-px active:scale-95 side:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="sidebar"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={`fixed inset-0 z-[88] bg-[rgb(22_13_12_/_0.48)] backdrop-blur-[2px] transition-opacity duration-300 side:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <header
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-[90] flex h-dvh w-[min(312px,84vw)] flex-col justify-between overflow-y-auto border-r border-line bg-bg px-[30px] pb-[clamp(28px,5vh,52px)] pt-[calc(76px+env(safe-area-inset-top))] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.1,1)] side:z-50 side:w-[clamp(200px,16vw,250px)] side:translate-x-0 side:overflow-visible side:border-r-0 side:bg-transparent side:px-[clamp(20px,1.5vw,30px)] side:py-[clamp(36px,4.6vh,60px)] side:shadow-none side:after:absolute side:after:inset-y-0 side:after:right-0 side:after:w-px side:after:bg-[linear-gradient(to_bottom,transparent_0%,var(--color-line)_35%,var(--color-line)_65%,transparent_100%)] side:after:content-[''] ${
          open
            ? 'translate-x-0 shadow-[14px_0_48px_-18px_rgb(0_0_0_/_0.35)]'
            : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-[26px]">
          <Reveal delay={0}>
            <a
              className="block text-ink"
              href="#inicio"
              onClick={(event) => handleNav(event, 'inicio')}
              aria-label={`${site.name} · ${site.role}`}
            >
              <span className="block text-balance font-heading text-[clamp(1.5rem,2.6vw,2.05rem)] font-bold leading-none tracking-[-0.05em]">
                {site.name}
                <span
                  className="ml-[0.1em] inline-block h-[0.12em] w-[0.12em] bg-accent align-baseline"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-[0.6rem] block font-mono text-[0.64rem] font-medium uppercase tracking-[0.1em] text-muted">
                {site.role}
              </span>
            </a>
          </Reveal>

          <Reveal delay={350} className="mt-[130px]">
            <nav aria-label="Secciones">
              <ul className="relative flex list-none flex-col gap-2 before:absolute before:inset-y-4 before:left-[3.75px] before:w-[1.5px] before:bg-line before:content-['']">
                {site.nav.map((item) => {
                  const isActive = active === item.id

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`${navLinkBase} ${isActive ? 'text-ink' : ''}`}
                        aria-current={isActive ? 'location' : undefined}
                        onClick={(event) => handleNav(event, item.id)}
                      >
                        <span
                          className={`relative z-[1] size-[9px] shrink-0 rounded-full border-[1.5px] bg-bg transition-[border-color,background-color,box-shadow] duration-200 group-hover:border-accent ${
                            isActive
                              ? 'border-accent bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_16%,transparent)]'
                              : 'border-line'
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`w-[1.4em] text-[0.62rem] transition-colors ${
                            isActive
                              ? 'text-accent opacity-100'
                              : 'text-muted opacity-65'
                          }`}
                        >
                          {item.num}
                        </span>
                        <span className="text-[clamp(0.82rem,0.53rem+0.37vw,0.92rem)] tracking-[0.01em]">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Reveal>
        </div>

        <Reveal delay={1500} className="flex flex-col gap-[18px]">
          <ul className="flex list-none gap-2" role="list">
            <li>
              <a
                className={socialLink}
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                className={socialLink}
                href={`mailto:${site.email}`}
                aria-label="Correo"
              >
                <MailIcon />
              </a>
            </li>
            <li>
              <a
                className={socialLink}
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>

          <span className="font-mono text-[0.72rem] text-muted">
            {site.location}
          </span>
        </Reveal>
      </header>
    </>
  )
}

export default Sidebar
