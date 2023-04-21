import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 100%;
  margin: 24px auto 0;
  text-align: center;

  input,
  InputMask {
    width: 300px;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 0px;
    border: 1px solid #000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    margin: 0 8px;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    display: block;
    max-width: 100%;
    margin: 24px auto 0;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #44bd32;
    padding: 4px 8px;
    border-radius: 12px;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
  }
`

export const botaHome = styled.button`
  margin: 56px auto;
  border-radius: 50%;
  border: none;
  height: 64px;
  width: 64px;
  cursor: pointer;
  transition: 0.5s ease;
  box-shadow: 1px 1px 4px 0px #353044;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: 36px;
  }
`
