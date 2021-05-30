import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const ServicePage = () => (
  <Layout>
    <Seo title='Produtos' />
    <div className='container'>
      <h1>Nossos Produtos</h1>
      <p>Conheça nossa linha de produtos</p>
    </div>
  </Layout>
)

export default ServicePage
