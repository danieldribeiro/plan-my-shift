import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  transition: all .2s;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    background-color: ${({theme}) => theme.COLORS.ACTIONS};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      background-color: ${({theme}) => theme.COLORS.ACTIONS_HOVER};
    }
  }
`