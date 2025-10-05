import { defineWorkspace } from 'bunup'

// https://bunup.dev/docs/guide/workspaces

export default defineWorkspace([
	{
		name: '[first_package_name]',
		root: 'packages/[first_package_name]'
	}
])
