import React from "react"

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'

import { Container } from "./styles"
import { Form } from "./styles"
import Input from "@/components/Input"

import Image from 'next/image'
import Logo from '../../../public/images/EscalApp.svg'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

export default function Login() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <Container>
            <Form>
              <Image src={Logo} alt="Logo Plan my Shift" className='logo' priority/>
              <Input icon={<CiUser/>} type={'text'} placeholder={'Usuário'} />
              <Input icon={<CiLock/>} type={'password'} placeholder={'Senha'} />
            </Form>
          </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}
