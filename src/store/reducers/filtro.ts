import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../UTILS/enums/contato'

type FiltroState = {
  termo?: string
  criterio: 'categoria' | 'status' | 'todas'
  valor?: enums.Categoria | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteratermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteratermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
