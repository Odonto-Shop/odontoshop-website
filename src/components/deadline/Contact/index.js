import React from 'react'

import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/icomoon/location'
import { phone } from 'react-icons-kit/icomoon/phone'
import { home } from 'react-icons-kit/entypo/home'

import {
  ContactSection,
  ContactHeading,
  Info,
  InfoItem,
  InfoIcon
} from './contact.style'

const RightSection = () => {
  return (
    <ContactSection>
      <ContactHeading>
        <h2>
          <span id='contactTitle'>Contate Nos</span>
        </h2>
      </ContactHeading>

      <Info className='contactInfo'>
        <InfoItem className='infoItem'>
          <InfoIcon>
            <Icon icon={location} size={33} />
          </InfoIcon>
          <h4>
            <span id='addressTitle'>Endereço</span>
          </h4>
          <p>
            <span id='addressDetails'>
              Av. Zequinha Freire 5795, salas 01 e 02
            </span>
          </p>
        </InfoItem>
        <InfoItem className='infoItem'>
          <InfoIcon>
            <Icon icon={phone} size={33} />
          </InfoIcon>
          <h4>
            <span id='phoneTitle'>Telefone</span>
          </h4>
          <p>
            <span id='phoneNumbers'>(86) 3085-0623</span>
          </p>
        </InfoItem>
        <InfoItem className='infoItem'>
          <InfoIcon>
            <Icon icon={home} size={33} />
          </InfoIcon>
          <h4>
            <span id='websiteTitle'>Web e Social</span>
          </h4>
          <p>
            <span id='Websites'>www.odontoshoppi.com @odontoshoppioficial</span>
          </p>
        </InfoItem>
      </Info>
    </ContactSection>
  )
}

export default RightSection
