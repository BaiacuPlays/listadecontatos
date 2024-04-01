import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Filtrocard from '../../components/Filtrocard'
import { RootReducer } from '../../store'
import { alteratermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../UTILS/enums/contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const Barralateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteratermo(evento.target.value))}
            />
            <S.Filtros>
              <Filtrocard
                valor={enums.Status.TEMPORARIO}
                criterio="status"
                legenda="temporarios"
              />
              <Filtrocard
                valor={enums.Status.PERMANTENTE}
                criterio="status"
                legenda="permanentes"
              />
              <Filtrocard
                valor={enums.Categoria.FAMILIAR}
                criterio="categoria"
                legenda="familiar"
              />
              <Filtrocard
                valor={enums.Categoria.OUTROS}
                criterio="categoria"
                legenda="amigo"
              />
              <Filtrocard
                valor={enums.Categoria.AMIGO}
                criterio="categoria"
                legenda="outros"
              />
              <Filtrocard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default Barralateral
