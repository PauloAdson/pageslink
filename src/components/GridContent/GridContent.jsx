import PropTypes from 'prop-types'
import { Heading } from '../Heading/Heading'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { TextComponent } from '../TextComponent/TextComponent'
import * as Styled from './styles'
import { ButtonAction } from '../ButtonAction/ButtonAction'

export const GridContent = ({
  title,
  html,
  background = '',
  color = '',
  sectionId = '',
  button = {},
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase $color={color} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent $color={color}>{html}</TextComponent>
        </Styled.Html>
        {button && button.children && (
          <Styled.ButtonContent>
            {button && <ButtonAction {...button} />}
          </Styled.ButtonContent>
        )}
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  sectionId: PropTypes.string,
  button: PropTypes.object,
}
