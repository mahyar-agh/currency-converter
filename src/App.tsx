import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Converter from "./components/Converter";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Converter />
    </div>
  );
};

export default App;
