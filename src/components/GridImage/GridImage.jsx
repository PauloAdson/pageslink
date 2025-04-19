import PropTypes from 'prop-types'
import { Heading } from '../Heading/Heading'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { TextComponent } from '../TextComponent/TextComponent'
import { ButtonAction } from '../ButtonAction/ButtonAction'

import * as Styled from './styles'

export const GridImage = ({
  title,
  description,
  grid,
  background = '',
  color = '',
  sectionId = '',
  button = {},
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase as="h2" $color={color}>
          {title}
        </Heading>

        <TextComponent $color={color}>{description}</TextComponent>

        <Styled.Grid>
          {grid
            .filter((el) => el && el.srcImg) // evita itens nulos ou sem imagem
            .map((el, index) => (
              <Styled.GridElement key={`${el.srcImg}${el.altText}-${index}`}>
                <Styled.Image src={el.srcImg} alt={el.altText} />
              </Styled.GridElement>
            ))}
        </Styled.Grid>

        {button && button.children && (
          <Styled.ButtonGridImage>
            {button && <ButtonAction {...button} />}
          </Styled.ButtonGridImage>
        )}
      </Styled.Container>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionId: PropTypes.string,
  button: PropTypes.object,
}
