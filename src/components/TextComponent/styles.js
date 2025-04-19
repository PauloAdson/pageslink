import styled, { css } from 'styled-components'

export const Container = styled.p`
  ${({ theme, $color }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 0;
    color: ${$color};
  `}
`
