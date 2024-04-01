import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../UTILS/enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      descricao: 'Email:\nTelefone:',
      categoria: enums.Categoria.OUTROS,
      status: enums.Status.PERMANTENTE,
      nome: 'José'
    },
    {
      id: 2,
      descricao: 'Email:\nTelefone:',
      categoria: enums.Categoria.OUTROS,
      status: enums.Status.TEMPORARIO,
      nome: 'Maria'
    },
    {
      id: 3,
      descricao: 'Email:\nTelefone:',
      categoria: enums.Categoria.AMIGO,
      status: enums.Status.TEMPORARIO,
      nome: 'Pedro'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexdocontato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexdocontato >= 0) {
        state.itens[indexdocontato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoexiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoexiste) {
        alert('ja existe essa contato')
      } else {
        const ultimacontato = state.itens[state.itens.length - 1]
        const contatonova = {
          ...action.payload,
          id: ultimacontato ? ultimacontato.id + 1 : 1
        }
        state.itens.push(contatonova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexdocontato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexdocontato >= 0) {
        state.itens[indexdocontato].status = action.payload.finalizado
          ? enums.Status.PERMANTENTE
          : enums.Status.TEMPORARIO
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions

export default contatosSlice.reducer
