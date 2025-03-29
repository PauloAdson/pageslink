import React from 'react'
import * as Styled from './styles'
import PropTypes from 'prop-types'

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark} // Remova as chaves extras
      as={as}
      size={size}
      uppercase={uppercase} // Remova as chaves extras
    >
      {children}
    </Styled.Title>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
}
