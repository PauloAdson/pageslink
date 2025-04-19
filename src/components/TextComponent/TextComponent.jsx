import PropTypes from 'prop-types'

import * as Styled from './styles'

export const TextComponent = ({ children, $color }) => {
  return (
    <Styled.Container
      $color={$color}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  $color: PropTypes.string,
}
