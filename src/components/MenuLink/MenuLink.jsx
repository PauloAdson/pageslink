import PropTypes from 'prop-types'

import * as Styled from './styles'

export const MenuLink = ({ children, link, newTab = false, $color }) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <Styled.Container href={link} target={target} $color={$color}>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
}
