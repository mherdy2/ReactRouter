import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from "./assets/components/navbar.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Navbar />
          <App />          
        </BrowserRouter>
     </React.StrictMode>,
)
