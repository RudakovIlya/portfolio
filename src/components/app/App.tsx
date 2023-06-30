import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Main } from '../sections/Main'
import { createContext } from 'react'
import { useLocalStorage } from 'utils/useLocalStorage'

export const ThemeContext = createContext<any>(null)

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  )
}
