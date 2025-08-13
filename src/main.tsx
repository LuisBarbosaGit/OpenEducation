import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { FlagMenuProvider } from './components/DropDownMenuProvider/DropDownMenuProvider.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlagMenuProvider>
      <App />
    </FlagMenuProvider> 
  </StrictMode>,
)
