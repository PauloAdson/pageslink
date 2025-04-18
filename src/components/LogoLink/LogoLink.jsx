import PropTypes from 'prop-types'

import * as Styled from './styles'
import { Heading } from '../Heading/Heading'

export const LogoLink = ({ text, srcImg = '', link, $background }) => {
  return (
    <Heading size="small" uppercase colorDark={!$background}>
      <Styled.Container href={link}>
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
  background: PropTypes.bool,
}
