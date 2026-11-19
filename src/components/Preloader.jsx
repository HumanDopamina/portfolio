import { site } from '../data/site'

function Preloader({ exiting = false }) {
  const name = site.name
  const first = name.charAt(0)
  const rest = name.slice(1)
  const revealDuration = Math.max(rest.length, 1) * 90

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-bg transition-opacity duration-[600ms] ease-in-out ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={exiting}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <h1
          className="font-heading text-[clamp(2.2rem,6vw,4rem)] font-bold leading-none tracking-[-0.04em] text-ink"
          aria-label={`${name}.`}
        >
          <span className="inline-block whitespace-pre" aria-hidden="true">
            <span>{first}</span>
            <span className="relative inline-block align-baseline">
              <span
                className="inline-block motion-safe:[clip-path:inset(0_100%_0_0)] motion-safe:animate-[preloader-reveal_1350ms_linear_forwards] motion-reduce:[clip-path:inset(0_0_0_0)]"
                style={{ animationDuration: `${revealDuration}ms` }}
              >
                {rest}
              </span>
              <span
                className="absolute top-0 left-0 text-accent motion-safe:animate-[preloader-brush_linear_forwards] motion-reduce:left-full"
                style={{ animationDuration: `${revealDuration}ms` }}
              >
                .
              </span>
            </span>
          </span>
        </h1>

        <p
          className="mt-4 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted opacity-0 motion-safe:animate-[preloader-fade-in_500ms_ease-out_forwards] motion-reduce:opacity-100"
          style={{ animationDelay: `${revealDuration}ms` }}
        >
          {site.role}
        </p>
      </div>
    </div>
  )
}

export default Preloader