import PropTypes, { bool } from 'prop-types'

import * as Styled from './styles'

export const ButtonAction = ({
  children,
  href = '#',
  target = '_self',
  bgColor = '#37d145',
  bgHover = '#1f9228',
  color = '#FFFFFF',
  colorHover = '#e4e1e1',
  uppercase = true,
}) => {
  return (
    <Styled.Container
      href={href}
      target={target}
      rel="noopener"
      $bgColor={bgColor}
      $bgHover={bgHover}
      $color={color}
      $colorHover={colorHover}
      $uppercase={uppercase}
    >
      {children}
    </Styled.Container>
  )
}

ButtonAction.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: bool.isRequired,
  bgColor: PropTypes.string,
  bgHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  uppercase: PropTypes.bool,
}
