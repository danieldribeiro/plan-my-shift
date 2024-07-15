import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 300px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.ACTIONS};
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px 2px #fff4;

  h1{
    text-transform: uppercase;
    font-size: 26px;
    font-weight: bold;
  }

  strong{
    font-size: 60px;
    font-weight: bolder;
  }

  p{
    margin-top: 20px;

    &:last-child{
      text-transform: uppercase;
    }
  }
`