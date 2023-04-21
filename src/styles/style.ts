import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'roboto';
  }

  body {
    background-image: linear-gradient(to bottom, #ccc, #Add8e6);
    height: 100vh;
  }
`
export default EstiloGlobal

export const Container = styled.div`
    width: 100%;
    margin: 24px auto 0;
    padding: 24px 16px;

    display: block;
    justify-content: space-around;
    align-items: center;
    gap: 56px;

    background-color: #ccc;
    border-radius: 24px;
    box-shadow: 4px 4px 8px 0px #353044;
  }
`
export const LeftSide = styled.div`
  width: 100%;
`

export const RightSide = styled.div`
  width: 100%;
`
