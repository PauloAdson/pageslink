import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme, $color }) => css`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;

    a {
      color: ${$color};
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  `}
`
