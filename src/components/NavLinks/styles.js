import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme, $background }) => css`
    display: flex;
    flex-flow: row wrap;

    a {
      color: ${$background ? theme.colors.white : theme.colors.primaryColor};
    }

    @media ${theme.media.menuSize} {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  `}
`
