import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useMediaQuery } from 'beautiful-react-hooks'

import PageWrapper, {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  NotifyButton,
  ContactFormWrap,
  FooterSection,
  RightSection
} from '@odontoshop/common/ui/deadline.style'
import LogoImage from '@odontoshop/common/static/images/logoOdontoShop.png'
import { SOCIAL_PROFILES } from '@odontoshop/common/data/social-share/deadline.socia.share'

const IndexPage = () => {
  const [navColor, setNavColor] = useState('primary')
  const isTabletWide = useMediaQuery('(max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  let options = {
    sectionClassName: 'section',
    arrowNavigation: true,
    anchors: ['home', 'about', 'contact'],
    navigation: true
  }

  return (
    <PageWrapper>
      <MainWrapper>
        <LeftSection>
          <Logo>
            <Link to={'/'}>
              <img src={LogoImage} alt='logo da odonto shop' />
            </Link>
          </Logo>
          <LeftContent>
            <p className='slogan'>
              <FormattedMessage id='ticker' />
            </p>
            <h2>
              <FormattedMessage id='mainMessage' />
            </h2>

            {isTabletWide && (
              <div>
                <CountDownTimer />
              </div>
            )}
          </LeftContent>

          <FooterSection>
            <SocialShare items={SOCIAL_PROFILES} />
            <p>
              <FormattedMessage id='copyrightText' />
            </p>
          </FooterSection>
        </LeftSection>
      </MainWrapper>
    </PageWrapper>
  )
}

export default IndexPage
