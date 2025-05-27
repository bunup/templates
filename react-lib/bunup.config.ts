import { defineConfig } from 'bunup'
import { injectStyles, report } from 'bunup/plugins'

export default defineConfig({
	entry: ['src/index.tsx'],
	format: ['esm', 'cjs'],
	dts: true,
	plugins: [report(), injectStyles()],
})
