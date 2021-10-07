import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src/vite'),
  base: `/${path.join(__dirname, 'out')}/`,
  build: {
    outDir: '../../out',
    emptyOutDir: true
  },
  plugins: [vue()]
})
