import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.js',
        reporters: ['default', 'json'],
        outputFile: 'test-results.json',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            thresholds: {
                global: {
                    lines: 60,
                    functions: 60,
                    branches: 60,
                    statements: 60,
                },
            },
        },
    },
})
