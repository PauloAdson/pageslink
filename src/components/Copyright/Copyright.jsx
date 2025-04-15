import PropTypes from 'prop-types'

import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'

export const Copyright = () => {
  return (
    <Styled.Container>
      {/* <SectionContainer> */}
      <span>
        PagesLink © {new Date().getFullYear()} | Desenvolvido por{' '}
        <a href="/">Paulo Adson</a>
      </span>
      {/* </SectionContainer> */}
    </Styled.Container>
  )
}

Copyright.propTypes = {
  children: PropTypes.node.isRequired,
}
