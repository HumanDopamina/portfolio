import { useEffect, useRef, useState } from 'react'
import { useIntro } from './IntroContext'

function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 18,
  once = true,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const { ready } = useIntro()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const visible = ready && inView

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--reveal-delay, ${delay}ms), transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--reveal-delay, ${delay}ms)`,
        willChange: visible ? 'auto' : 'opacity, transform',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal