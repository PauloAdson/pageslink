import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextComponent } from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`

export const GridElement = styled.div`
  ${() => css`
    ${HeadingContainer} {
      word-break: break-word;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      position: relative;
      /* left: 5rem; */
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      /* content: counter(grid-counter); */
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`

export const ButtonGridText = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
