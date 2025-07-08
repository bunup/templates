import { defineWorkspace } from 'bunup'

export default defineWorkspace([
	{
		name: 'package-1',
		root: 'packages/package-1',
		config: {
			entry: ['src/index.ts'],
			format: ["esm", "cjs"],
		},
	},
])
