// ALL IMPORT HOOKS
import * as React from 'react'

const useThemeMode = () => {
    const [theme, setTheme] = React.useState<string>('')
    const onSelectedMode = (selected: string) => {
        setTheme(selected)
        if (selected && selected === 'light' || selected === 'dark') {
            localStorage.theme = selected
        }

        selected === 'system' && localStorage.removeItem('theme')
    }
    React.useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme('system')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }

    }, [theme, onSelectedMode])
    return { theme, onSelectedMode }
}

export { useThemeMode }
