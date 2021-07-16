import React from 'react'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/icomoon/location'
import { ic_alarm } from 'react-icons-kit/md/ic_alarm'
import { ic_person } from 'react-icons-kit/md/ic_person'

import { AboutSection, Heading, Info, InfoItem, InfoIcon } from './about.style'

const About = () => {
  return (
    <AboutSection>
      <Heading>
        <h2>
          <span>Sobre Nós</span>
        </h2>
        <p>
          <span id='aboutText'>
            A Odonto Shop é uma empresa líder de mercado que emprega conceitos
            modernos de gerenciamento, administratição e distribuição. Estamos
            alinhados aos interesses de nossos clientes e colaboradores por meio
            de uma assitência contínua.
          </span>
        </p>
      </Heading>

      <Info className='aboutInfo'>
        <h2>
          <span id='serviceTitle'>Nossos Serviços</span>
        </h2>
        <InfoItem>
          <InfoIcon className='withBg'>
            <Icon icon={location} size={33} />
          </InfoIcon>
          <h4>
            <span id='serviceTitle1'>Estética</span>
          </h4>
          <p>
            <span id='serviceDesc1'>
              Tratamentos estéticos promovem melhorias na autoestima
            </span>
          </p>
        </InfoItem>
        <InfoItem>
          <InfoIcon className='withBg'>
            <Icon icon={ic_alarm} size={33} />
          </InfoIcon>
          <h4>
            <span id='serviceTitle2'>Resinas</span>
          </h4>
          <p>
            <span id='serviceDesc2'>
              Um dos benéficios da aplicação de resina é a durabilidade
            </span>
          </p>
        </InfoItem>
        <InfoItem>
          <InfoIcon className='withBg'>
            <Icon icon={ic_person} size={33} />
          </InfoIcon>
          <h4>
            <span id='serviceTitle2'>Próteses</span>
          </h4>
          <p>
            <span id='serviceDesc2'>Descrição do serviço 03</span>
          </p>
        </InfoItem>
      </Info>
    </AboutSection>
  )
}

export default About
