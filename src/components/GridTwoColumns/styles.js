import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { ButtonAction } from '../ButtonAction/ButtonAction'

export const Container = styled.div`
  ${({ theme }) => css`
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
  ${() => css``}
`

export const Image = styled.img`
  ${() => css`
    width: 100%;
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
    margin-top: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`
