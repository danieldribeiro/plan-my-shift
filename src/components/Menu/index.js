import { Container } from "./styles"

export default function Menu({active}) {
  return (
    <Container active={active}>
      <ul>
        <li>Escala</li>
        <li>Minhas escalas</li>
        <li>Pessoal</li>
        <li>Atividades</li>
      </ul>
    </Container>
  )
}