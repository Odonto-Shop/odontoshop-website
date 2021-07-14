import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const ProductPage = () => (
  <Layout>
    <Seo title='Produtos' />
    <div className='container'>
      <h1>Nossos Serviços</h1>
      <p>Conheça nossa linha de produtos</p>
    </div>
  </Layout>
)

export default ProductPage
