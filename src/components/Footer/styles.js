import styled, { css } from 'styled-components'
import { Container as TextComponent } from '../TextComponent/styles'
import { Container as SectionContainer } from '../SectionContainer/styles'

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`
