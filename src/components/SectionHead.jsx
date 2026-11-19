import Reveal from './Reveal'

function SectionHead({ num, title }) {
  return (
    <Reveal
      as="header"
      className="mb-[clamp(2rem,4vw,2.75rem)] flex items-center gap-[18px] max-[640px]:justify-center"
    >
      <span
        className="hidden h-[1.5px] flex-1 bg-line max-[640px]:block"
        aria-hidden="true"
      />
      <span className="font-mono text-[0.95rem] font-medium text-accent">
        {num}
      </span>
      <h2 className="whitespace-nowrap font-heading text-[clamp(1.6rem,2.8vw,1.8rem)] font-bold tracking-[-0.02em]">
        {title}
      </h2>
      <span
        className="h-[1.5px] flex-1 bg-line max-[640px]:hidden"
        aria-hidden="true"
      />
    </Reveal>
  )
}

export default SectionHead
