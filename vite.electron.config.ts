import { defineConfig } from 'vite'
import * as path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${path.join(__dirname, 'dist')}/`,
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'electron'],
      input: path.join(__dirname, 'src/electron/*.ts'),
      output: {
        entryFileNames: '[name].js',
        format: 'commonjs'
      }
    },
    outDir: '../../dist',
    emptyOutDir: false
  },
  plugins: [commonjs(), multiInput({ transformOutputPath: (output) => path.basename(output) })]
})
