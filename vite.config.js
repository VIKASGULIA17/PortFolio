import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change if needed
    strictPort: true, // Ensures the exact port is used
    open: false, // Prevents browser auto-opening
  },
  resolve: {
    alias: {
      '@': '/src', // Allows using '@' instead of relative paths
    },
  },
});
