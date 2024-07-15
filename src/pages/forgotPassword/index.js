'use client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'

import { Container } from "./styles"
import { Form } from "./styles"
import Input from "@/components/Input"

import Image from 'next/image'
import Logo from '../../../public/images/EscalApp.svg'
import { CiMail } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import Button from "@/components/Button"
import Link from 'next/link'

export default function forgotPassword() {
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
              <p>
                Para recuperar sua senha, insira seu e-mail abaixo e clique no botão &quot;Recuperar senha&quot;
              </p>
              <Input icon={<CiMail/>} type={'password'} placeholder={'E-mail'} />
              <Button title={'Recuperar senha'}/>
            </Form>
          </Container>
      </ThemeProvider>
  );
}
