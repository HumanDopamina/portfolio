import { site } from '../data/site'
import { UserIcon } from './icons'

function Avatar({ className = '' }) {
  if (site.avatar) {
    return (
      <img
        src={site.avatar}
        alt={`Retrato de ${site.name}`}
        width="100"
        height="100"
        loading="lazy"
        decoding="async"
        className={`block aspect-square w-full rounded-full border border-line bg-surface-2 object-cover object-[50%_22%] ${className}`}
      />
    )
  }

  return (
    <div
      className={`grid aspect-square w-full place-items-center rounded-full border border-line bg-[radial-gradient(circle_at_32%_24%,color-mix(in_srgb,var(--color-accent)_10%,transparent),transparent_55%),var(--color-surface-2)] text-muted [&_svg]:h-[36%] [&_svg]:w-[36%] [&_svg]:opacity-60 ${className}`}
      role="img"
      aria-label="Foto pendiente"
    >
      <UserIcon />
    </div>
  )
}

export default Avatar
