import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: calc(100vh - 80px);
  background-color: ${({theme}) => theme.COLORS.UNFOCUS};
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: ${({ active }) => (active ? 'block' : 'none')};
  animation: show ease .2s;

  @keyframes show {
    0%{
      bottom: 100vh;
    }
    100%{
      bottom: 0;
    }
  }

  ul{
    width: 100%;
    height: auto;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};

    li{
      width: 100%;
      list-style: none;
      padding: 20px 0;
      font-size: 24px;
      text-align: center;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND};
      border-bottom: 2px solid ${({theme}) => theme.COLORS.DISABLED};
      cursor: pointer;

      &:hover{
        background-color: ${({theme}) => theme.COLORS.ACTIONS};
      }
    }
  }
`