import * as enums from '../UTILS/enums/contato'

class Contato {
  nome: string
  categoria: enums.Categoria
  status: enums.Status
  descricao: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
