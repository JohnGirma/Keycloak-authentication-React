import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {ReactKeycloakProvider} from '@react-keycloak/web';
import keycloak from './keycloak.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
)
