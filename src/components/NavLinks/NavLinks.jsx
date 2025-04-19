import PropTypes from 'prop-types'
import * as Styled from './styles'
import { MenuLink } from '../MenuLink/MenuLink'

export const NavLinks = ({ links = [], $color }) => {
  return (
    <Styled.Container $color={$color}>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} $color={$color} />
      ))}
    </Styled.Container>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    })
  ),
}
