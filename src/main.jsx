import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

import { PackageProvider } from './context/PackageContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <PackageProvider>
        <App />
      </PackageProvider>
    </ErrorBoundary>
  </StrictMode>,
)
