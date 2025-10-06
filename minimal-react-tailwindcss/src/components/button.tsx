'use client'

export function Button(props: React.ComponentProps<'button'>): React.ReactNode {
	return (
		<button
			type="button"
			className="[project_name_letter_only]:bg-blue-500 [project_name_letter_only]:hover:bg-blue-600 [project_name_letter_only]:text-white [project_name_letter_only]:px-4 [project_name]:py-2 [project_name]:rounded-md"
			{...props}
		/>
	)
}
