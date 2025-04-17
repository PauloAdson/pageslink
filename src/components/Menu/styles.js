import styled, { css } from 'styled-components'
import { Container as SectionContainer } from '../SectionContainer/styles'
import { Title as Heading } from '../Heading/styles'

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`

const backgroundColor = (theme, $background) => css`
  background: ${$background};
  color: ${theme.colors.white};
`

export const Container = styled.div`
  ${({ theme, $visible, $background }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 300ms ease-in-out;
    ${$background
      ? backgroundColor(theme, $background)
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.primaryColor};
        `}

    > ${SectionContainer} {
      padding-top: 1.4rem;
      padding-bottom: 1.4rem;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    & nav {
      font-family: ${theme.font.family.secondary};
      font-weight: 400;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${$visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`

export const Button = styled.button`
  ${({ theme, $visible, $background }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    ${$visible
      ? css`
          background: ${theme.colors.white};
          color: ${theme.colors.primaryColor};
        `
      : backgroundColor(theme, $background)}
    border: none;
    display: none;
    cursor: pointer;
    pointer-events: ${$visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`
