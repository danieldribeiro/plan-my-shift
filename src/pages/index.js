import React from "react"

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Head from "next/head";

export default function Home() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Head>
          <meta name="description" content="Plan My Shift é um aplicativo destinado ao gerenciamento de escalas" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        </Head>
        <main>
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
}
