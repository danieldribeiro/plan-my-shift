'use client'

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
import Button from "@/components/Button"
import Link from 'next/link'

export default function Login() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <Container>
            <Form>
              <Image src={Logo} alt="Logo Plan my Shift" className='logo' priority/>
              <Input icon={<CiUser/>} type={'text'} placeholder={'Usuário'} />
              <Input icon={<CiLock/>} type={'password'} placeholder={'Senha'} />
              <Link href='/forgotPassword'>Esqueci a senha</Link>
              <Button title={'Entrar'}/>
              <div className='hr-wrapper'>
                <hr />
                <span>or</span>
              </div>
              <Link href='/createAccount'>
                <Button title={'Criar uma conta'}/>
              </Link>
            </Form>
          </Container>
      </ThemeProvider>
  );
}
