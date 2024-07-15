import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input, button, textarea {
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ACTIONS};
  }
`