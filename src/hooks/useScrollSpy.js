import { useEffect, useState } from 'react'

function getActiveSection() {
  const sections = [...document.querySelectorAll('main section[id]')]
  if (!sections.length) return null

  // Línea imaginaria al 35% de la pantalla: la sección que la cruza
  // (o la última cuyo inicio ya pasó) es la sección actual.
  const line = window.innerHeight * 0.35
  let current = sections[0].id

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    if (rect.top > line) break
    current = section.id
  }

  // Al llegar al final de la página, marca siempre la última sección.
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2

  if (atBottom) current = sections[sections.length - 1].id

  return current
}

export function useScrollSpy(initialId = 'inicio') {
  const [active, setActive] = useState(initialId)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const current = getActiveSection()
      if (current) setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return [active, setActive]
}
