import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
