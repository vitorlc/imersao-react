import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria({ children }) {

  return (
    <PageDefault>
      Cadastrar Categoria
      <Link to="/">
        Voltar home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria