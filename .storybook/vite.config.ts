import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'
import path from 'path'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, './src/*'),
    //   },
    // },
  })
}
// https://vitejs.dev/config/
export default app
