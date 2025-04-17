import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'
import './style.scss' 
import Preloader from './common/Preloader.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader/>
    <App />
  </StrictMode>,
)
