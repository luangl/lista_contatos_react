import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Buttons } from '../Botoes/styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contatos = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (
      nomeOriginal.length &&
      telefoneOriginal.length &&
      emailOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setTelefone(telefoneOriginal)
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelarEdicao() {
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.ListTitulos>
        <li>Nome</li>
        <li>Telefone</li>
        <li>E-mail</li>
      </S.ListTitulos>
      <S.Formulario>
        <S.Dados
          disabled={!estaEditando}
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <S.Dados
          disabled={!estaEditando}
          type="number"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <S.Dados
          disabled={!estaEditando}
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Formulario>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <Buttons
              bgColor={'00e50b'}
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </Buttons>
            <Buttons bgColor={'fc4444'} onClick={cancelarEdicao}>
              Cancelar
            </Buttons>
          </>
        ) : (
          <>
            <Buttons bgColor={'c1bb00'} onClick={() => setEstaEditando(true)}>
              Editar
            </Buttons>
            <Buttons bgColor={'fc4444'} onClick={() => dispatch(remover(id))}>
              Remover
            </Buttons>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contatos
