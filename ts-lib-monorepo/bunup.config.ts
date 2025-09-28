import { defineWorkspace } from 'bunup'

// Learn more about Bunup workspaces: https://bunup.dev/docs/guide/workspaces

export default defineWorkspace(
	[
		{
			name: 'package-1',
			root: 'packages/package-1',
			config: {
				entry: ['src/index.ts'],
				format: ['esm', 'cjs'],
			},
		},
	],
	{
		exports: true,
		unused: true,
	},
)
