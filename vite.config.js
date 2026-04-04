import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// When deployed to GitHub Pages the site lives at /<repo-name>/.
// GITHUB_REPOSITORY is set automatically by Actions (format: "owner/repo").
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  base,
  plugins: [vue()],
})
