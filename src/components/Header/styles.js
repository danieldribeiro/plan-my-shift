import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5%;

  span {
    width: 25px;
    height: 4px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    position: relative;
    cursor: pointer;

    &::before{
      content: '';
      position: absolute;
      top: -8px;
      width: 25px;
      height: 4px;
      background-color: ${({theme}) => theme.COLORS.WHITE};
      transition: .2s;
    }

    &::after{
      content: '';
      position: absolute;
      top: 8px;
      width: 25px;
      height: 4px;
      background-color: ${({theme}) => theme.COLORS.WHITE};
      transition: .2s;
    }
  }

  .active{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};

    &::before{
      transform: rotate(45deg) translateY(6px) translateX(6px);
    }
    
    &::after{
      transform: rotate(135deg) translateY(6px) translateX(-5.5px);
    }
  }

  .date{
    font-size: 18px;
    font-weight: bold;
    background-color: ${({theme}) => theme.COLORS.RED};
    padding: 6px 10px;
    border-radius: 12px;
  }

  img{
    border-radius: 50%;
    cursor: pointer;
  }


`