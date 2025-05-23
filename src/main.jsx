import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ Make sure this is imported
import { BrowserRouter } from "react-router-dom";
import ShopcontextProvider from "./context/Shopcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>
  </BrowserRouter>
);
