import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        about:          resolve(__dirname, 'about.html'),
        careers:        resolve(__dirname, 'careers.html'),
        'health-alerts':resolve(__dirname, 'health-alerts.html'),
        specialists:    resolve(__dirname, 'specialists.html'),
        fees:           resolve(__dirname, 'fees.html'),
        news:           resolve(__dirname, 'news.html'),
        resources:      resolve(__dirname, 'patient-resources.html'),
      }
    }
  }
})
