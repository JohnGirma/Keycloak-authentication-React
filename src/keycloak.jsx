import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'YOUR_KEYCLOAK_URL', // e.g., 'https://your-keycloak-server/auth'
  realm: 'YOUR_REALM', // e.g., 'myrealm'
  clientId: 'YOUR_CLIENT_ID', // e.g., 'myclient'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
