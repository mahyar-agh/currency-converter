import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}



html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}
button:not(:disabled):active {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: translateY(-3px);
  }
*:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

input:disabled {
  background-color: #374151;
  color: #9ca3af;
}

.app{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F2F4F5;
}
`;

export default GlobalStyle;
