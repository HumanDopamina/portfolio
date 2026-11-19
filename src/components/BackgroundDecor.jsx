function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Blob superior derecho */}
      <svg
        className="absolute -right-[10%] -top-[8%] h-[42rem] w-[42rem] text-accent opacity-[0.07] motion-safe:animate-[float-slow_18s_ease-in-out_infinite]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.7,74.8C27.6,83,13.8,88,-0.7,89.2C-15.3,90.4,-30.6,87.9,-43.8,80.3C-57,72.7,-68.1,60.1,-76.2,45.7C-84.3,31.3,-89.4,15.6,-89.1,0.2C-88.8,-15.3,-83.1,-30.6,-73.6,-43.1C-64.1,-55.6,-50.8,-65.3,-37.1,-72.7C-23.4,-80.1,-11.7,-85.2,1.8,-88.3C15.3,-91.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      {/* Anillo inferior izquierdo */}
      <svg
        className="absolute -bottom-[12%] -left-[8%] h-[34rem] w-[34rem] text-ink opacity-[0.045] motion-safe:animate-[spin-very-slow_60s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <circle cx="100" cy="100" r="72" />
        <circle cx="100" cy="100" r="54" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="36" />
      </svg>

      {/* Arco/forma geométrica central */}
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2">
        <svg
          className="h-[28rem] w-[28rem] text-accent opacity-[0.05] motion-safe:animate-[float-reverse_22s_ease-in-out_infinite]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M30 140 A80 80 0 0 1 170 140"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M50 140 A60 60 0 0 1 150 140"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeDasharray="2 8"
          />
          <circle cx="30" cy="140" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="170" cy="140" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="100" cy="60" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Patrón de puntos derecho */}
      <svg
        className="absolute right-[6%] top-[55%] h-64 w-64 text-ink opacity-[0.06] motion-safe:animate-[float-slow_20s_ease-in-out_infinite_2s]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 16}
              cy={10 + row * 16}
              r="1.2"
            />
          )),
        )}
      </svg>

      {/* Cruces pequeñas */}
      <svg
        className="absolute bottom-[18%] right-[28%] h-40 w-40 text-accent opacity-[0.08] motion-safe:animate-[float-reverse_16s_ease-in-out_infinite]"
        viewBox="0 0 100 100"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      >
        <g transform="translate(20 20)">
          <path d="M0 6H12M6 0V12" />
        </g>
        <g transform="translate(60 35)">
          <path d="M0 5H10M5 0V10" />
        </g>
        <g transform="translate(35 65)">
          <path d="M0 5H10M5 0V10" />
        </g>
        <g transform="translate(75 70)">
          <path d="M0 4H8M4 0V8" />
        </g>
      </svg>
    </div>
  )
}

export default BackgroundDecor