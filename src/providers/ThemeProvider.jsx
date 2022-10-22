import { createContext, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem('theme') || 'light';

export const ThemeContext = createContext({ theme: defaultTheme } )

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(defaultTheme)

	const value = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}
