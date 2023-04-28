import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Button, TextField } from '@material-ui/core';

const Registration = () => {
  const { keycloak } = useKeycloak();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    keycloak
      .register({
        username: username,
        password: password,
      })
      .then((authenticated) => {
        console.log(authenticated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

export default Registration;
