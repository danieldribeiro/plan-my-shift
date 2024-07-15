import { Container } from "./styles"

export default function Menu({active}) {
  return (
    <Container active={active}>
      <ul>
        <li>Escalas</li>
        <li>Minhas escalas</li>
        <li>Pessoal</li>
        <li>Atividades</li>
      </ul>
    </Container>
  )
}