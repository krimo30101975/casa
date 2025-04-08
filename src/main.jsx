import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App'

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
   <BrowserRouter>
     <Routes>
       <Route index element={<App />} />
     </Routes>
   </BrowserRouter>
  </StrictMode>,
)

//ReactDOM.createRoot(root).render(
//    <BrowserRouter>
//      <Routes>
//        <Route index element={<App />} />
//      </Routes>
//    </BrowserRouter>
//);