import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/Hp/.gemini/antigravity-ide/brain/324f0f1b-59fc-4216-b44b-1a32fce2be31'
      ]
    }
  }
})
