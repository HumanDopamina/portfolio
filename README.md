# Portfolio

Portfolio personal construido con **React 19 + Vite**.

## Estructura

```
src/
├── components/      Componentes reutilizables (Navbar, Button, Card...)
├── sections/        Secciones de la página (Hero, About, Projects...)
├── data/            Contenido centralizado (textos, enlaces, proyectos)
├── styles/
│   ├── tokens.css   Variables globales: colores, fuentes, espacios...
│   ├── reset.css    Normalización entre navegadores
│   └── global.css   Base del sitio y utilidades (.container, .section...)
├── assets/          Imágenes y recursos
├── App.jsx
└── main.jsx
```

## Cambiar colores y fuentes

Todo vive en `src/styles/tokens.css`:

- **Colores:** `--color-bg`, `--color-primary`, `--color-text`...
- **Fuentes:** `--font-body`, `--font-heading`, `--font-mono`
- **Tamaños:** `--text-base`, `--text-5xl`...
- **Espaciado:** `--space-1` ... `--space-10`
- **Layout:** `--container`, `--gutter`, `--section-space`

Los colores usan `light-dark(claro, oscuro)` y siguen el tema del sistema.
Para forzar un tema, edita `index.html`:

```html
<html lang="es" data-theme="dark">
```

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # revisar el código
```
