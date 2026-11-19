function Tags({ tags, className = '', active = false }) {
  return (
    <ul
      className={`flex list-none flex-wrap gap-2 font-mono text-[0.74rem] ${className}`}
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full border border-accent/30 px-[11px] py-[5px] font-medium text-accent transition-colors duration-200 group-hover:bg-[color-mix(in_srgb,var(--color-accent)_7%,var(--color-surface))] ${
            active
              ? 'bg-[color-mix(in_srgb,var(--color-accent)_7%,var(--color-surface))]'
              : 'bg-surface'
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
