import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <div className='container'>
      <h1>Olá visitante</h1>
      <p>Bem vindos ao site da Odonto Shop.</p>
      <p>Em breve você encontrará um website completo.</p>
    </div>
  </Layout>
)

export default IndexPage
