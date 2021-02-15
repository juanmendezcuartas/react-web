import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .app {
    background-color: ${({ theme }) => theme.body};
  }

  .nav {
    background-color: ${({ theme }) => theme.nav};
  }

  .cardBody {
    background-color: ${({ theme }) => theme.body};
  }

  .inputsearch {
    background-color: ${({ theme }) => theme.nav};
  }

  .butcon {
    background-color: ${({ theme }) => theme.nav};
    color: ${({ theme }) => theme.text};
  }
  `
