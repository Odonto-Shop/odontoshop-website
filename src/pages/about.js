import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutPage = () => (
  <Layout>
    <Seo title='Nossa Empresa' />
    <div className='container'>
      <h1>A Odonto Shop</h1>
      <p>Página dedica à história da empresa</p>
    </div>
  </Layout>
)

export default AboutPage
