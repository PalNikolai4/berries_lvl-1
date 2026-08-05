import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    css: {
        devSourcemap: true
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    server: {
        open: true
    }
})