import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'

export const Container = styled.div`
  ${({ theme, $color }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${$color};
    }
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`

export const Image = styled.img`
  ${() => css`
    width: auto;
    height: auto;
    max-height: 500px;
  `}
`

export const ButtonDesktop = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`
export const ButtonMobile = styled.div`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    margin-top: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`
