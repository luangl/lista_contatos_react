import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type TarefasState = {
  itens: Contato[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Luan Glaab',
      telefone: '00000000000',
      email: 'luan@gmail.com'
    },
    {
      id: 2,
      nome: 'Ebac',
      telefone: '00000000000',
      email: 'ebac@gmail.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
