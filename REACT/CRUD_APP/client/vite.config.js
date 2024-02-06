import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Your alias configurations...
    },
    // Add or update the "extensions" option to include ".jsx"
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.json'],
  },
  // Update the loader configuration to handle JSX files
  esbuild: {
    // Specify the loader for JSX files
    jsxInject: `import React from 'react'`,
  },
})
