import PropTypes from 'prop-types'

import * as Styled from './styles'
import { Heading } from '../Heading/Heading'

export const LogoLink = ({ text, srcImg = '', link, $color }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} $color={$color}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  )
}

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string,
}
