import styled, { css } from 'styled-components'

const backgroundColor = (theme, $background) => css`
  background: ${$background};
  color: ${theme.colors.white};
`

export const Container = styled.div`
  ${({ theme, $background }) => css`
    ${$background
      ? backgroundColor(theme, $background)
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.primaryColor};
        `}

    min-height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  `}
`
