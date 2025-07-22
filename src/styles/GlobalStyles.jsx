// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333; /* Базовый цвет текста для всего сайта */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Сброс базовых стилей для заголовков, чтобы они наследовали font-family */
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Inter', sans-serif;
      margin-top: 0;
      margin-bottom: 0.5em; /* Добавьте отступ снизу, если нужно */
  }

  p {
      margin-top: 0;
      margin-bottom: 1em; /* Добавьте отступ снизу, если нужно */
  }

  a {
    text-decoration: none;
    color: inherit; /* Чтобы ссылки наследовали цвет текста по умолчанию */
  }

  button {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;