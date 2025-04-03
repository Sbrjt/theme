import { ThemeProvider } from 'next-themes'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning>
			<body>
				<ThemeProvider
					forcedTheme='dark'
					defaultTheme='dark'
					attribute='class'
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
