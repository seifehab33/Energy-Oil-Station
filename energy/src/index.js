import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LanguageContext from "../src/Components/LanguageContext";

function Index() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LanguageContext.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
