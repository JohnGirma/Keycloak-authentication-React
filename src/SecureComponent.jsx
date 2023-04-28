import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const SecureComponent = ({ role, children }) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <div>You need to be authenticated to access this page.</div>;
  }

  if (!keycloak.hasRealmRole(role)) {
    return <div>You don't have the required role to access this page.</div>;
  }

  return <>{children}</>;
};

export default SecureComponent;