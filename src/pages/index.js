import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useMediaQuery } from 'beautiful-react-hooks'

import PageWrapper, {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  FooterSection,
  RightSection
} from '../../common/ui/deadline.style'
import LogoImage from '../../common/static/images/logoOdontoShop.png'
import { SOCIAL_PROFILES } from '../../common/data/social-share/social'
import Seo from '../components/seo'
import SocialShare from '../components/deadline/SocialShare'
import CountDownTimer from '../components/deadline/CountDownTimer'
import { SectionsContainer, Section, Header } from 'react-fullpage'
import About from '../components/deadline/About'
import Contact from '../components/deadline/Contact'

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
      <React.Fragment>
        <Seo title='Em Breve' />
        <MainWrapper>
          <LeftSection>
            <Logo>
              <Link to={'/'}>
                <img src={LogoImage} alt='logo da odonto shop' />
              </Link>
            </Logo>

            <LeftContent>
              <p className='slogan'>
                <span>Lançaremos em breve</span>
              </p>
              <h2>
                <span>
                  Nossa esquipe está trabalhando em um website completo para
                  você. Volte em alguns dias
                </span>
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
                <span>Odonto Shop © 2021. Todos os direitos reservados</span>
              </p>
            </FooterSection>
          </LeftSection>

          {isTabletWide && (
            <React.Fragment>
              <About />
              <Contact />
            </React.Fragment>
          )}

          {isDesktop && (
            <RightSection>
              <SectionsContainer {...options}>
                <Section>
                  <CountDownTimer />
                </Section>
                <Section>
                  <About />
                </Section>
                <Section>
                  <Contact />
                </Section>
              </SectionsContainer>

              <Header className='pagination'>
                <nav className={`nav-${navColor}`}>
                  <a
                    href='#home'
                    className='active'
                    onClick={() => setNavColor('primary')}
                  >
                    <span className='label'>Home</span>
                    <span className='dot'></span>
                  </a>
                  <a href='#about' onClick={() => setNavColor('light')}>
                    <span className='label'>Sobre</span>
                    <span className='dot'></span>
                  </a>
                  <a href='#contact' onClick={() => setNavColor('light')}>
                    <span className='label'>Contato</span>
                    <span className='dot'></span>
                  </a>
                </nav>
              </Header>
            </RightSection>
          )}
        </MainWrapper>
      </React.Fragment>
    </PageWrapper>
  )
}

export default IndexPage
