import React from 'react';
import keycloak from './keycloak';

const Login = () => {
  const login = () => {
    keycloak.login();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login with Keycloak</button>
    </div>
  );
};

export default Login;
