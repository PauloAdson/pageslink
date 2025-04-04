import PropTypes from 'prop-types'

import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'

const random = () => `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-')
export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  const id = sectionId ? sectionId : random()
  return (
    <Styled.Container $background={background || undefined} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  )
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
}
