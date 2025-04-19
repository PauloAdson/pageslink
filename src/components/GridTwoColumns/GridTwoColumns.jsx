import PropTypes from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { Heading } from '../Heading/Heading'
import { TextComponent } from '../TextComponent/TextComponent'
import { ButtonAction } from '../ButtonAction/ButtonAction'

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = '',
  color = '',
  sectionId = '',
  button = {},
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container $background={background}>
        <Styled.TextContainer>
          <Heading uppercase $color={color} as="h1">
            {title}
          </Heading>

          <TextComponent $color={color}>{text}</TextComponent>

          {button && button.children && (
            <Styled.ButtonDesktop>
              {button && <ButtonAction {...button} />}
            </Styled.ButtonDesktop>
          )}
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />

          {button && button.children && (
            <Styled.ButtonMobile>
              {button && <ButtonAction {...button} />}
            </Styled.ButtonMobile>
          )}
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  )
}

GridTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  sectionId: PropTypes.string,
  button: PropTypes.object,
}
