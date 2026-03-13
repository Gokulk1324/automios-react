import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContext } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);