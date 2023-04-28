import React from 'react';
import keycloak from './keycloak';

const SecureComponent = ({ role, children }) => {
  if (keycloak.hasResourceRole(role)) {
    return <>{children}</>;
  } else {
    return <div>You do not have permission to view this content.</div>;
  }
};

export default SecureComponent;
