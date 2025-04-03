'use client'
import { useTheme } from 'next-themes'

export default function Home() {
	const { theme } = useTheme()
	return (
		<div className='text-8xl dark:text-slate-500 dark:bg-slate-950 text-slate-950 bg-slate-300 h-screen'>
			Theme: {theme}
		</div>
	)
}
