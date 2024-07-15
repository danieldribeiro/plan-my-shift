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

  a{
    max-width: 400px;
    margin-bottom: 10px;
    text-align: right;
    font-size: 14px;
    cursor: pointer;
  }

  .hr-wrapper{
    position: relative;

    hr{
      margin: 40px auto;
      width: 100%;
      max-width: 400px;
      height: 1px;
      border: none;
      background-color: ${({theme}) => theme.COLORS.DISABLED};
    }

    span{
      position: absolute;
      top: -10px;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND};
      padding: 0 8px;
      left: 50%;
      transform: translateX(-50%);
      color: ${({theme}) => theme.COLORS.DISABLED};
    }
  }

`