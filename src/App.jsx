import { useEffect, useLayoutEffect, useState } from 'react'
import BackgroundDecor from './components/BackgroundDecor'
import HeroRole from './components/HeroRole'
import { IntroContext } from './components/IntroContext'
import Preloader from './components/Preloader'
import Reveal from './components/Reveal'
import Section from './components/Section'
import Sidebar from './components/Sidebar'
import { buttonGhost, buttonPrimary } from './components/buttonStyles'
import { ArrowRightIcon } from './components/icons'
import { site } from './data/site'
import { useScrollSpy } from './hooks/useScrollSpy'
import About from './sections/About'
import Approach from './sections/Approach'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {
  const [activeSection, setActiveSection] = useScrollSpy()
  const [showPreloader, setShowPreloader] = useState(true)
  const [preloaderExiting, setPreloaderExiting] = useState(false)
  const [introReady, setIntroReady] = useState(false)
  const heroRoles = site.heroRoles ?? []

  // El barrido del hero arranca justo cuando termina el preloader,
  // así se ve completo una sola vez por carga/recarga de la página.
  const revealDuration = Math.max(site.name.length - 1, 1) * 90
  const roleDuration = 500
  const pause = 900
  const exitDuration = 600
  const exitStart = revealDuration + roleDuration + pause
  const heroSweepDelay = exitStart + exitDuration

  // Tema único con la paleta definida en src/styles/themes.css
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = 'palette'
  }, [])

  useLayoutEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0]
    const isReload = navigationEntry?.type === 'reload'

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}`,
        )
      }
      window.scrollTo(0, 0)
      return
    }

    // Las URLs con hash (enlaces directos) sí deben respetar su sección.
    if (window.location.hash) {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1)),
      )
      target?.scrollIntoView({ behavior: 'instant', block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (showPreloader) {
      document.body.style.overflow = 'hidden'
    } else {
      const navigationEntry = performance.getEntriesByType('navigation')[0]
      if (navigationEntry?.type === 'reload') {
        window.scrollTo(0, 0)
      }
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showPreloader])

  useEffect(() => {
    if (!showPreloader) return

    const exitTimer = window.setTimeout(() => setPreloaderExiting(true), exitStart)
    const hideTimer = window.setTimeout(() => {
      setShowPreloader(false)
      setIntroReady(true)
    }, heroSweepDelay)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [showPreloader, exitStart, heroSweepDelay])

  return (
    <IntroContext.Provider value={{ ready: introReady }}>
      <div className="relative isolate min-h-svh">
        {showPreloader && <Preloader exiting={preloaderExiting} />}
        <BackgroundDecor />
        <Sidebar active={activeSection} onNavigate={setActiveSection} />

        <main className="relative z-10 px-[var(--gutter)] pt-[calc(88px+env(safe-area-inset-top))] side:ml-[var(--side-w)] side:w-[calc(100%-var(--side-w))] side:px-[var(--main-px)] side:pt-0">
          <Section
            id="inicio"
            innerClassName="flex min-h-[calc(100svh-88px-env(safe-area-inset-top))] flex-col justify-center py-6 pb-8 side:min-h-svh side:py-16"
          >
            <Reveal delay={0}>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-accent">
                <span
                  aria-hidden="true"
                  className="mr-[0.55em] inline-block h-px w-[1.6em] bg-current align-middle"
                />
                Hola, soy Leo!
              </p>
            </Reveal>
            <Reveal delay={0}>
              <h1
                className="mt-4 min-h-[2.2em] max-w-full text-[clamp(2rem,1.5rem+2.4vw,3.5rem)] leading-[1.05] tracking-[-0.03em]"
                aria-label={heroRoles.join(' ')}
              >
                <HeroRole lines={heroRoles} startDelay={heroSweepDelay} />
              </h1>
            </Reveal>

            <Reveal delay={1100}>
              <p className="mt-4 max-w-[58ch] text-base leading-[1.75] text-muted">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={1300}>
              <div className="mt-9 flex flex-wrap gap-[14px]">
                <a className={`group ${buttonPrimary}`} href="#proyectos">
                  Ver proyectos
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a className={buttonGhost} href="#contacto">
                  Contacto
                </a>
              </div>
            </Reveal>
          </Section>

          <About />

          <Approach />

          <Experience />

          <Projects />

          <Contact />
        </main>
      </div>
    </IntroContext.Provider>
  )
}

export default App
