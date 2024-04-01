import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, Botaosalvar } from '../../styles'

import * as enums from '../../UTILS/enums/contato'

type Props = ContatoClass

const Contato = ({
  descricao: descricaooriginal,
  categoria,
  status,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, Setdescricao] = useState('')

  useEffect(() => {
    if (descricaooriginal.length > 0) {
      Setdescricao(descricaooriginal)
    }
  }, [descricaooriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    Setdescricao(descricaooriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.PERMANTENTE}
          onChange={alteraStatusContato}
        />
        <S.Nome>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Nome>
      </label>
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => Setdescricao(evento.target.value)}
      />
      <S.Barraacao>
        {estaEditando ? (
          <>
            <Botaosalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    categoria,
                    status,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </Botaosalvar>
            <S.botaocancelarremover onClick={cancelarEdicao}>
              Cancelar
            </S.botaocancelarremover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.botaocancelarremover onClick={() => dispatch(remover(id))}>
              Remover
            </S.botaocancelarremover>
          </>
        )}
      </S.Barraacao>
    </S.Card>
  )
}

export default Contato
