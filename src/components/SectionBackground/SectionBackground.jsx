import PropTypes from 'prop-types'

import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const SectionBackground = ({
  children,
  background = '',
  sectionId = '',
}) => {
  return (
    <Styled.Container $background={background || undefined} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  )
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  sectionId: PropTypes.string,
}
