# start up the Keycloak server in docker
 1, install docker pull jboss/keycloak
 2,  docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e DB_VENDOR=h2 -e KEYCLOAK_PASSWORD=admin jboss/keycloak:latest

# Access the Keycloak admin console:
  1, http://localhost:8080/auth/admin
  2, Create a new realm
  3, Create a new client
  3, Configure the client roles and permissions:

  docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e DB_VENDOR=h2 -e KEYCLOAK_PASSWORD=admin jboss/keycloak:latest