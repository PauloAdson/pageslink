import styled, { css } from 'styled-components'

export const Container = styled.span`
  ${({ theme }) => css`
    text-align: center;
    color: #252525bd;
    font-family: ${theme.font.family.secondary};
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: ${theme.spacings.medium};
    border-top: 0.1rem solid ${theme.colors.primaryColor};

    & a {
      font-weight: 400;
      color: #2687a5;
      transition: all ease 0.3s;
    }

    & a:hover {
      color: #4cc2e6;
    }
  `}
`
