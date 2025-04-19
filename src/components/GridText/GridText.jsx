import PropTypes from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { Heading } from '../Heading/Heading'
import { TextComponent } from '../TextComponent/TextComponent'
import { ButtonAction } from '../ButtonAction/ButtonAction'

export const GridText = ({
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
        <Heading size="huge" uppercase $color={color} as="h2">
          {title}
        </Heading>

        <TextComponent $color={color}>{description}</TextComponent>

        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" $color={color} as="h3">
                {el.title}
              </Heading>

              <TextComponent $color={color}>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
        {button && button.children && (
          <Styled.ButtonGridText>
            {button && <ButtonAction {...button} />}
          </Styled.ButtonGridText>
        )}
      </Styled.Container>
    </SectionBackground>
  )
}

GridText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionId: PropTypes.string,
  button: PropTypes.object,
}
