import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo({ children }) {

  return (
    <PageDefault>
      Cadastrar Video
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo