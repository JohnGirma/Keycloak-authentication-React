import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Button } from '@material-ui/core';

const Logout = () => {
  const { keycloak } = useKeycloak();

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <h1>Logout</h1>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
