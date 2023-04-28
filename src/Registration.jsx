import React from 'react';
import keycloak from './keycloak';

const Registration = () => {
  const register = () => {
    keycloak.register();
  };

  return (
    <div>
      <h1>Registration</h1>
      <button onClick={register}>Register with Keycloak</button>
    </div>
  );
};

export default Registration;
