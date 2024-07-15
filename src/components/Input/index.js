'use-client'

import { Container } from "./styles"

export default function Input({icon, type, placeholder}){
  return (
    <Container>
      <label htmlFor="">
        {icon}
        <input type={type} placeholder={placeholder} />
      </label>
    </Container>
  )
}