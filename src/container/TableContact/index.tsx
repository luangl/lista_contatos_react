import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contatos from '../../components/Contatos'
import TituloComponent from '../../components/Titulo'

import * as S from './styles'

const TableContact = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Content>
      <TituloComponent>Seus contatos</TituloComponent>
      <S.Container>
        {itens.map((c) => (
          <li key={c.telefone}>
            <Contatos
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </S.Container>
    </S.Content>
  )
}

export default TableContact
