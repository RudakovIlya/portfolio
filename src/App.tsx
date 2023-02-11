import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {createContext} from "react";
import useLocalStorage from "./utils/useLocalStorage";

export const ThemeContext = createContext<any>(null);

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Header/>
                <Main/>
                <Footer/>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
