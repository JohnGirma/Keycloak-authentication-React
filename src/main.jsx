import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <KeycloakProvider keycloak={keycloak}>
      <App />
    </KeycloakProvider>
  </React.StrictMode>,
)
