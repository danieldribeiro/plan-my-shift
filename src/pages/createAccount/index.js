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
import { CiMail } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import Button from "@/components/Button"
import Link from 'next/link'

export default function createAccount() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <Container>
            <Link href="/login" className='back'>
              <GoArrowLeft />
              Voltar
            </Link>
            <Form>
              <Image src={Logo} alt="Logo Plan my Shift" className='logo' priority/>
              <Input icon={<CiUser/>} type={'text'} placeholder={'Usuário'} />
              <Input icon={<CiMail/>} type={'mail'} placeholder={'E-mail'} />
              <Input icon={<CiLock/>} type={'password'} placeholder={'Senha'} />
              <Button title={'Criar conta'}/>
            </Form>
          </Container>
      </ThemeProvider>
  );
}
