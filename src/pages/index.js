import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layouts from '../components/Layouts'
import Seo from '../components/seo'

import '../../static/css/bootstrap.min.css'
import '../../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../static/css/animate.css'
import '../../static/css/util.css'
import '../../static/css/main.css'

import bg01 from '../../static/images/bg01.jpg'
import bg02 from '../../static/images/bg02.jpg'
import bg03 from '../../static/images/bg03.jpg'

const IndexPage = () => (
  <Layouts>
    <Seo title='Em Breve' />
    <div className='simpleslide100'>
      <div
        className='simpleslide100-item bg-img1'
        css={{ backgroundImage: `url(${bg01})` }}
      ></div>
      <div
        className='simpleslide100-item bg-img1'
        css={{ backgroundImage: `url(${bg02})` }}
      ></div>
      <div
        className='simpleslide100-item bg-img1'
        css={{ backgroundImage: `url(${bg03})` }}
      ></div>
    </div>

    <div className='flex-col-c-sb size1 overlay1'>
      <div className='w-full flex-w flex-sb-m p-l-80 p-r-80 p-t-22 p-lr-15-sm'>
        <div className='wrappic1 m-t-10 m-b-10'>
          <StaticImage
            src='../images/odontoshop-logo.png'
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt='Odonto Shop'
          />
        </div>
      </div>

      <div className='flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-120'>
        <h3 className='l1-txt1 txt-center p-b-40 respon1'>Em Breve</h3>

        <div className='flex-w flex-c-m cd100'>
          <div className='flex-col-c wsize1 m-b-30'>
            <span className='l1-txt2 p-b-9 days'>00</span>
            <span className='s1-txt1 where1 p-l-35'>Dias</span>
          </div>

          <div className='flex-col-c wsize1 m-b-30'>
            <span className='l1-txt2 p-b-9 hours'>00</span>
            <span className='s1-txt1 where1 p-l-35'>Horas</span>
          </div>

          <div className='flex-col-c wsize1 m-b-30'>
            <span className='l1-txt2 p-b-9 minutes'>00</span>
            <span className='s1-txt1 where1 p-l-35'>Minutos</span>
          </div>

          <div className='flex-col-c wsize1 m-b-30'>
            <span className='l1-txt2 p-b-9 seconds'>00</span>
            <span className='s1-txt1 where1 p-l-35'>Segundos</span>
          </div>
        </div>
      </div>

      <div className='flex-w flex-c-m p-b-35'>
        <address
          href='https://www.instagram.com/odontoshopoficial/'
          className='size3 flex-c-m how-social trans-04 m-r-30 m-l-30 m-b-5'
        >
          <i className='fa fa-instagram'></i>
        </address>

        <a
          href='https://www.facebook.com/odontoshopoficial/'
          className='size3 flex-c-m how-social trans-04 m-r-30 m-l-30 m-b-5'
        >
          <i className='fa fa-facebook'></i>
        </a>

        <a
          href='https://www.facebook.com/odontoshopoficial/'
          className='size3 flex-c-m how-social trans-04 m-r-30 m-l-30 m-b-5'
        >
          <i className='fa fa-youtube-play'></i>
        </a>
      </div>
    </div>

    <script src={`../../scripts/jquery-3.2.1.min.js`} type='text/javascript' />
    <script src={`../../scripts/moment.min.js`} type='text/javascript' />
    <script
      src={`../../scripts/moment-timezone.min.js`}
      type='text/javascript'
    />
    <script
      src={`../../scripts/moment-timezone-with-data.min.js`}
      type='text/javascript'
    />
    <script src={`../../scripts/countdowntime.js`} type='text/javascript' />
    <script src={`../../scripts/set.time.js`} type='text/javascript' />
    <script src={`../../scripts/tilt.jquery.min.js`} type='text/javascript' />
    <script src={`../../scripts/tilt.js`} type='text/javascript' />
    <script src={`../../scripts/main.js`} type='text/javascript' />
  </Layouts>
)

export default IndexPage
