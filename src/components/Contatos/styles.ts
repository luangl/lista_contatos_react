import styled from 'styled-components'

export const Card = styled.div`
  max-width: 100%;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
`

export const ListTitulos = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2e86de;
  border-radius: 8px 8px 0 0;

  li {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    padding: 8px 0;
  }
`

export const Formulario = styled.div`
  margin: 16px auto;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`

export const Dados = styled.input`
  border: none;
  max-width: 100%;
  padding: 4px 0px;
  outline: none;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  :hover {
    background-color: #48dbfb;
    border-radius: 4px 4px 0 0;
  }

  :focus {
    border-bottom: 1px solid #48dbfb;
    background-color: #48dbfb;
    border-radius: 4px 4px 0 0;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-bottom: 16px;
`
