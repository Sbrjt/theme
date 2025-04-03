import { ThemeProvider } from 'next-themes'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning>
			<body>
				<ThemeProvider
					forcedTheme='dark'
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
