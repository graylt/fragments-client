import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AllFragments from './src/components/AllFragments'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fragments'
})
