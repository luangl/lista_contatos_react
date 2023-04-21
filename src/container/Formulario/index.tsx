import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import TituloComponent from '../../components/Titulo'

import * as S from './styles'

import imgHome from '../../images/home.png'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = new Contato(nome, telefone, email, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <S.Content>
      <TituloComponent>Preencha aqui os dados do novo contato</TituloComponent>
      <S.Form onSubmit={cadastrarContato}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <InputMask
          mask="(99) 99999-9999"
          placeholder="Telefone"
          value={telefone}
          onChange={(evento) =>
            setTelefone(evento.target.value.replace(/\D/g, ''))
          }
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </S.Form>
      <S.botaHome onClick={() => navigate('/')}>
        <img src={imgHome} alt="casa" />
      </S.botaHome>
    </S.Content>
  )
}

export default Formulario
