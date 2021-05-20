import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <h1>Olá visitante</h1>
    <p>Bem vindos ao site da Odoto Shop.</p>
    <p>
      Estamos preparando um website completo onde você encontrará tudo que
      precisa em breve.
    </p>
  </Layout>
)

export default IndexPage