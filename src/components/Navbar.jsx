import React, { useState } from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes"

const Navbar = () => {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div className="navbar">
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <h1>Where in the world?</h1>
                <GlobalStyles/>
                <button onClick={themeToggler}>Dark Mode</button>
        </ThemeProvider>
        </div>
    )
}

export default Navbar
