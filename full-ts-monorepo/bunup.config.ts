import { defineWorkspace } from 'bunup'

// Learn more about Bunup workspaces: https://bunup.dev/docs/guide/workspaces

export default defineWorkspace(
	[
		{
			name: '[first_package_name]',
			root: 'packages/[first_package_name]',
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
