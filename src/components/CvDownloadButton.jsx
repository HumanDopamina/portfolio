import { site } from '../data/site'
import { useIntro } from './IntroContext'
import { DownloadIcon } from './icons'

function CvDownloadButton() {
  const { ready } = useIntro()

  return (
    <a
      href={site.cv}
      download="Leonel_Hernandez_CV.pdf"
      aria-label="Descargar currículum en PDF"
      className={`group fixed top-[calc(clamp(18px,2.6vh,30px)+env(safe-area-inset-top))] right-[clamp(18px,2.4vw,38px)] z-[80] inline-flex items-center gap-2 rounded-[9px] border-2 border-[color-mix(in_srgb,var(--color-muted)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-surface)_84%,transparent)] px-4 py-[10px] font-mono text-[0.8rem] font-bold text-muted shadow-[0_6px_18px_-12px_rgb(0_0_0_/_0.45)] backdrop-blur-[7px] transition-[opacity,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent max-[1080px]:right-[var(--gutter)] max-[1080px]:px-[13px] max-[1080px]:py-2 max-[1080px]:text-[0.74rem] motion-reduce:hover:translate-y-0 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Descargar CV
      <DownloadIcon className="transition-transform duration-200 group-hover:translate-y-px" />
    </a>
  )
}

export default CvDownloadButton
