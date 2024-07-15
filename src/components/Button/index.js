import { Container } from "./styles"

export default function Button({title}){
  return (
    <Container>
      <button type="button">
        {title}
      </button>
    </Container>
  )
}