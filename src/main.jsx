import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { ShopProvider } from "./context/ShopContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);