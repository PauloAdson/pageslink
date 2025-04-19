import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme, $color }) => css`
    display: flex;
    text-decoration: none;
    color: ${$color};
    > img {
      max-height: 6rem;
    }
  `}
`
