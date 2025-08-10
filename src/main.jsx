import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './AuthContext/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'

AOS.init({ duration: 1000 });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
