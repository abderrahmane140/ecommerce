import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardsProvider from './context/CartContext.jsx'
import LoginProvider from './context/loginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginProvider>
    <CardsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </CardsProvider>
  </LoginProvider>
)
