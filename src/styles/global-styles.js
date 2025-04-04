import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-x: auto;
    display: block;
  }

  table {
    min-width: 600px;
    width: 100%;
    border-collapse: collapse;
    }

    table caption {
      text-align: left;
      caption-side: top;
      margin: 1rem 0;
      font-size: var(--font-small);
      font-style: italic;
    }

    table th, table tfoot {
      background: #eee;
    }

    table td,
    table th {
      border: 1px solid #eee;
      padding: 5px 10px;
      text-align: left;
    }
`
