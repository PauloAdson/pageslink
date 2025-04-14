import PropTypes from 'prop-types'

import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { useState } from 'react'

export const Menu = ({ links = [], logoData, background = false }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Styled.Button
        $visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>

      <Styled.Container
        $visible={visible}
        onClick={() => setVisible(false)}
        $background={background}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} $background={background} />
            <NavLinks links={links} background={background} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
}
