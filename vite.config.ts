import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    mdx({ jsxImportSource: 'solid-jsx', remarkPlugins: [remarkGfm] }),
    solidPlugin(),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
