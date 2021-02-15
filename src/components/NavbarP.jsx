import React, { useState } from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap'; 

const NavbarP = () => {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        // <div className="navbar">
        //     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        //         <h1>Where in the world?</h1>
        //         <GlobalStyles/>
        //         <button onClick={themeToggler}>Dark Mode</button>
        // </ThemeProvider>
        // </div>
        <Container fluid>
  <Navbar expand="lg" variant="light" bg="light">
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Navbar.Brand href="#">Where in the word?</Navbar.Brand>
    <Nav className="navbar-nav ml-auto">
    <GlobalStyles/>
        <Nav.Link href="#" onClick={themeToggler}><FontAwesomeIcon icon={faMoon} /> Dark Mode</Nav.Link>
    </Nav>
    </ThemeProvider>
  </Navbar>
</Container>
    )
}

export default NavbarP
