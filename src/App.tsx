import { createContext } from 'react'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

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