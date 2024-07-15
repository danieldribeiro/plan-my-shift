import React from "react"

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Head>
          <meta name="description" content="Plan My Shift é um aplicativo destinado ao gerenciamento de escalas" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header/>
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
}
