import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ⬅️ à ajouter
import MyRouter from "./routers/router";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/Main.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </React.StrictMode>
);