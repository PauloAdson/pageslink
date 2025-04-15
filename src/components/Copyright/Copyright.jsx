import PropTypes from 'prop-types'

import * as Styled from './styles'

export const Copyright = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  )
}

Copyright.propTypes = {
  children: PropTypes.node.isRequired,
}
