'use client'

export function Button(props: React.ComponentProps<'button'>): React.ReactNode {
	return (
		<button
			type="button"
			className="[project_name]:bg-blue-500 [project_name]:hover:bg-blue-600 [project_name]:text-white [project_name]:px-4 [project_name]:py-2 [project_name]:rounded-md"
			{...props}
		/>
	)
}
