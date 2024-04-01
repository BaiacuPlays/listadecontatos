import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../UTILS/enums/contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  status?: enums.Status
  parametro: 'status' | 'categoria'
}

function retornacordefundo(props: TagProps): string {
  if (props.parametro === 'categoria') {
    if (props.categoria === enums.Categoria.FAMILIAR) return variaveis.vermelho
    if (props.categoria === enums.Categoria.AMIGO) return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.TEMPORARIO) return variaveis.amarelo
    if (props.status === enums.Status.PERMANTENTE) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornacordefundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Barraacao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const botaocancelarremover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
