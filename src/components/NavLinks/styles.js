import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme, $color }) => css`
    display: flex;
    flex-flow: row wrap;

    a {
      color: ${$color};
    }

    @media ${theme.media.menuSize} {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  `}
`
