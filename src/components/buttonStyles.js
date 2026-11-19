const buttonBase =
  'inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-sm border px-5 py-[13px] font-mono text-[0.86rem] font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150'

export const buttonPrimary = `${buttonBase} border-transparent bg-[linear-gradient(200deg,color-mix(in_srgb,var(--color-accent)_60%,white)_0%,var(--color-accent)_52%,color-mix(in_srgb,var(--color-accent)_90%,black)_100%)] text-on-accent hover:-translate-y-0.5`

export const buttonGhost = `${buttonBase} border-[color-mix(in_srgb,var(--color-muted)_55%,transparent)] bg-surface text-muted hover:-translate-y-0.5 hover:border-accent hover:text-accent`
