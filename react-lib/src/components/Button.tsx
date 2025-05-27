'use client'

import React, { type JSX, type PropsWithChildren } from 'react'

export const Button = ({ children }: PropsWithChildren): JSX.Element => {
	return <button type="button">{children}</button>
}
