'use client'

export function Button(props: React.ComponentProps<'button'>): React.ReactNode {
	return (
		<button
			type="button"
			className="[package_name_letters_only]:bg-blue-500 [package_name_letters_only]:hover:bg-blue-600 [package_name_letters_only]:text-white [package_name_letters_only]:px-4 [package_name_letters_only]:py-2 [package_name_letters_only]:rounded-md"
			{...props}
		/>
	)
}
