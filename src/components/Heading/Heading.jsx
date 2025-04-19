import React from 'react'
import * as Styled from './styles'
import PropTypes from 'prop-types'

export const Heading = ({
  children,
  as = 'h2',
  size = 'huge',
  $color,
  uppercase = false,
}) => {
  return (
    <Styled.Title $color={$color} as={as} size={size} $uppercase={uppercase}>
      {children}
    </Styled.Title>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  $color: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
}
