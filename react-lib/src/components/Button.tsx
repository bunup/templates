'use client'

import { type PropsWithChildren } from 'react'

export const Button = ({ children }: PropsWithChildren): React.ReactNode => {
	return <button type="button">{children}</button>
}
