import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme, $background }) => css`
    display: flex;
    flex-flow: row wrap;

    a {
      color: ${$background ? theme.colors.white : theme.colors.primaryColor};
    }
    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`
