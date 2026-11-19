/**
 * Envoltorio de sección. La paleta se aplica globalmente desde App
 * y todas las secciones la heredan.
 */
function Section({ id, className = '', innerClassName = '', children }) {
  return (
    <section id={id} className={`scroll-mt-8 ${className}`}>
      <div className={`mx-auto w-full max-w-[50rem] ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
