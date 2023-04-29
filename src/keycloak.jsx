import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/auth/', // e.g., 'https://your-keycloak-server/auth'
  realm: 'React', // e.g., 'myrealm'
  clientId: 'React-app', // e.g., 'myclient'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
