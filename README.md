<div align="center">

# 🚀 PagesLink

**Facilitando a criação de sites para quem não entende de programação.**

</div>

---

## 📌 Sobre o projeto

O **PagesLink** é uma aplicação desenvolvida com o objetivo de tornar simples e acessível a criação de sites personalizados, mesmo para usuários sem conhecimento técnico em programação.  

Essa é a versão **frontend**, desenvolvida com **React + Vite**, utilizando uma stack moderna para performance, componentização e escalabilidade.

---

## 🧪 Tecnologias e Ferramentas

- ⚛️ **React 19**
- ⚡ **Vite**
- 💅 **styled-components**
- 🌐 **react-router-dom**
- 📦 **PropTypes**
- 🧩 **Storybook** – documentação de componentes
- 🧹 **ESLint + Prettier** – padronização e qualidade de código
- ✅ **Vitest** – testes unitários
- 🧪 **Playwright** – testes de interface

---

## 📁 Estrutura do Projeto

├── .env
├── .env.production
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .storybook
    ├── main.js
    ├── preview.jsx
    └── vitest.setup.js
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    ├── _redirects
    ├── assets
    │   └── images
    │   │   ├── javascript.svg
    │   │   └── logo.svg
    └── favicon-default.ico
├── src
    ├── api
    │   ├── dados.json
    │   ├── map-button.js
    │   ├── map-data.js
    │   ├── map-menu.js
    │   └── map-sections.js
    ├── components
    │   ├── ButtonAction
    │   │   ├── ButtonAction.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── Copyright
    │   │   ├── Copyright.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── GoTop
    │   │   ├── GoTop.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── GridContent
    │   │   ├── GridContent.jsx
    │   │   ├── mock.js
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── GridImage
    │   │   ├── GridImage.jsx
    │   │   ├── mock.js
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── GridText
    │   │   ├── GridText.jsx
    │   │   ├── mock.js
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── GridTwoColumns
    │   │   ├── GridTwoColumns.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── Heading
    │   │   ├── Heading.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── LogoLink
    │   │   ├── LogoLink.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── Menu
    │   │   ├── Menu.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── MenuLink
    │   │   ├── MenuLink.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── NavLinks
    │   │   ├── NavLinks.jsx
    │   │   ├── mock.js
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── SectionBackground
    │   │   ├── SectionBackground.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── SectionContainer
    │   │   ├── SectionContainer.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   └── TextComponent
    │   │   ├── TextComponent.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    ├── config
    │   └── index.js
    ├── main.jsx
    ├── styles
    │   ├── global-styles.js
    │   └── theme.js
    ├── templates
    │   ├── Base
    │   │   ├── Base.jsx
    │   │   ├── mock.jsx
    │   │   ├── stories.jsx
    │   │   └── styles.js
    │   ├── Home
    │   │   ├── Home.jsx
    │   │   └── styles.js
    │   ├── Loading
    │   │   ├── Loading.jsx
    │   │   └── styles.js
    │   └── PageNotFound
    │   │   └── PageNotFound.jsx
    └── utils
    │   └── hasValidButton.js
├── vite.config.js
└── vitest.workspace.js
