// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://rgonzalef.github.io/tu-repo', // Cambia esto con tu URL de GitHub Pages
  base: '/astro-app/', // Reemplaza "tu-repo" con el nombre real de tu repositorio
  output: 'static', // Asegura que Astro genere archivos estáticos
  vite: {
    plugins: [tailwindcss()],
  },
})
