import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botaosalvar, MainContainer, Nome } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../UTILS/enums/contato'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [descricao, setdescricao] = useState('')
  const [categoria, setcategoria] = useState(enums.Categoria.OUTROS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        categoria,
        descricao,
        status: enums.Status.TEMPORARIO
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Nova tarefa</Nome>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="nome "
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setdescricao(target.value)}
          as="textarea"
          placeholder="Email e telefone do contato"
        />
        <Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((Categoria) => (
            <Opcao key={Categoria}>
              <input
                value={Categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setcategoria(evento.target.value as enums.Categoria)
                }
                id={Categoria}
                defaultChecked={Categoria === enums.Categoria.OUTROS}
              />{' '}
              <label htmlFor={Categoria}>{Categoria}</label>
            </Opcao>
          ))}
        </Opcoes>
        <Botaosalvar type="submit">Cadastrar</Botaosalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
