import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme, $bgColor, $bgHover, $color, $colorHover, $uppercase }) => css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    background-color: ${$bgColor};
    color: ${$color};
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    text-transform: ${$uppercase ? 'uppercase' : 'none'};

    max-width: 320px;
    width: 100%;
    padding: ${theme.spacings.xmedium} ${theme.spacings.xsmals};
    border-radius: 34px;

    transition: all 0.3s ease;

    &:hover {
      background-color: ${$bgHover};
      color: ${$colorHover};
    }
  `}
`
