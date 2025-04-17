import PropTypes from 'prop-types'
import { Heading } from '../Heading'
import { SectionBackground } from '../SectionBackground'
import { TextComponent } from '../TextComponent'
import * as Styled from './styles'
import { ButtonAction } from '../ButtonAction/ButtonAction'

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
  button = {},
}) => {
  return (
    <SectionBackground
      background={background || undefined}
      sectionId={sectionId}
    >
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
        {button && button.children && (
          <Styled.ButtonContent>
            <ButtonAction>Começar Agora</ButtonAction>
          </Styled.ButtonContent>
        )}
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
  button: PropTypes.object,
}
