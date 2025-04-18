import PropTypes from 'prop-types'
import * as Styled from './styles'
import { TextComponent } from '../TextComponent/TextComponent'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  )
}

Footer.propTypes = {
  footerHtml: PropTypes.string.isRequired,
}
