import PropTypes from 'prop-types'

import * as Styled from './styles'

export const Copyright = () => {
  return (
    <Styled.Container>
      <span>
        <a href="/">Feito com PagesLink ©</a> {new Date().getFullYear()} |
        Desenvolvido por Paulo Adson
      </span>
    </Styled.Container>
  )
}

Copyright.propTypes = {
  children: PropTypes.node.isRequired,
}
