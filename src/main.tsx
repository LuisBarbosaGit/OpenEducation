import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { SideBarProvider } from './components/Sidebar/SideBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </StrictMode>,
)
