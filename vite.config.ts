import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

function forceExitPlugin() {
  return {
    name: 'force-exit',
    apply: 'build' as const,
    closeBundle() {
      setTimeout(() => process.exit(0), 100)
    },
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
    }),
    forceExitPlugin(),
  ],
  server: {
    allowedHosts: ['.zrok.io']
  }
})
