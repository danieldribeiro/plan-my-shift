import styled from 'styled-components'

export const Container = styled.section`
  width: 80%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .back{
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  text-align: center;

  .logo{
    width: 180px;
    height: auto;
  }

  p{
    width: 100%;
    max-width: 400px;
    margin: 0 auto 30px;
  }
`