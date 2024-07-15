import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40x;
  border-bottom: 2px solid ${({theme}) => theme.COLORS.DISABLED};
  margin: 0 auto 30px;

  label{
    display: flex;
    align-items: center;
    gap: 8px;

    input{
      background-color: transparent;
      border: none;
      width: 100%;
      height: 40px;
      font-size: 18px;
      font-weight: 600;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    svg{
      width: 30px;
      height: 30px;
      color: ${({theme}) => theme.COLORS.DISABLED};
    }
  }

  &:focus-within{
    border-bottom: 3px solid ${({theme}) => theme.COLORS.ACTIONS};

    svg{
      color: ${({theme}) => theme.COLORS.ACTIONS};
    }
  }
`