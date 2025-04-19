import PropTypes from 'prop-types'

import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { LogoLink } from '../LogoLink/LogoLink'
import { NavLinks } from '../NavLinks/NavLinks'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { useState } from 'react'

export const Menu = ({ links = [], logoData, background = '', color = '' }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Styled.Button
        $visible={visible}
        onClick={() => setVisible(true)}
        $background={background}
        $color={color}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Fechar o menu" />
        ) : (
          <MenuIcon aria-label="Abrir o menu" />
        )}
      </Styled.Button>

      <Styled.Container
        $visible={visible}
        onClick={() => setVisible(false)}
        $background={background}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} $background={background} $color={color} />
            <NavLinks links={links} $background={background} $color={color} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}
