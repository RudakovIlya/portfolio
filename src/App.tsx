import { createContext } from 'react'

import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/sections/Main'

import useLocalStorage from './utils/useLocalStorage'


export const ThemeContext = createContext<any>(null)

export const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}