import ParagrafoComponent from '../../components/Paragrafo'

import * as S from './styles'

const Header = () => {
  return (
    <S.Content>
      <h1>Lista de contatos</h1>
      <ParagrafoComponent>
        Sua agenda de contatos prática e rápida!
      </ParagrafoComponent>
    </S.Content>
  )
}
export default Header
