import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './global/reset.css';
import './global/baseColor.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
