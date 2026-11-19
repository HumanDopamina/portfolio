const MS_PER_CHAR = 85
const LINE_GAP_MS = 140

function SweepLine({ text, showFirst = false, delay = 0, last = false }) {
  const head = showFirst ? text.charAt(0) : ''
  const tail = showFirst ? text.slice(1) : text
  const duration = Math.max(tail.length, 1) * MS_PER_CHAR

  const animationStyle = {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
  }

  const dotClass = last
    ? 'motion-safe:animate-[hero-sweep-dot-last_linear_both] motion-reduce:left-full motion-reduce:opacity-100'
    : 'motion-safe:animate-[hero-sweep-dot-first_linear_both] motion-reduce:opacity-0'

  return (
    <span className="block">
      {head && <span aria-hidden="true">{head}</span>}
      <span
        className="relative inline-block align-baseline whitespace-nowrap"
        aria-hidden="true"
      >
        <span
          className="inline-block motion-safe:[clip-path:inset(0_100%_0_0)] motion-safe:animate-[preloader-reveal_linear_forwards] motion-reduce:[clip-path:inset(0_0_0_0)] motion-reduce:animate-none"
          style={animationStyle}
        >
          {tail}
        </span>
        <span
          className={`absolute top-0 left-0 text-accent motion-reduce:animate-none motion-reduce:[animation-delay:0ms] ${dotClass}`}
          style={animationStyle}
        >
          .
        </span>
      </span>
    </span>
  )
}

export default function HeroRole({ lines, startDelay = 0 }) {
  const visibleLines = lines.filter(Boolean)
  const rows = visibleLines.reduce((acc, text, index) => {
    const showFirst = index === 0
    const previous = acc[acc.length - 1]
    const delay = previous
      ? previous.delay + previous.duration + LINE_GAP_MS
      : startDelay
    const duration = Math.max(text.length - (showFirst ? 1 : 0), 1) * MS_PER_CHAR

    return [
      ...acc,
      {
        text,
        showFirst,
        delay,
        duration,
        last: index === visibleLines.length - 1,
      },
    ]
  }, [])

  return (
    <>
      {rows.map((row, index) => (
        <SweepLine key={index} {...row} />
      ))}
    </>
  )
}
