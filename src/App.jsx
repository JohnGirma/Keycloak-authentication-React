import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Registration from './Registration';
import Nice from './Nice'

import SecureComponent from './SecureComponent';
import { useKeycloak } from '@react-keycloak/web';
import { Button } from '@material-ui/core';
function App() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <>
    
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hi">Home</Link>
            </li>
            {keycloak.authenticated ? (
              <>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
                <li>
                  <Link to="/secure">Secure Page</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        </div>

        <Router>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/hi">
            <Nice />
          </Route>
          <Route path="/secure">
            <SecureComponent role="admin">
              <div>
                <h1>Secure Page</h1>
                <p>This content is only visible to users with the "admin" role.</p>
              </div>
            </SecureComponent>
          </Route>
          <Route path="/">
            <div>
              <h1>Welcome to the application!</h1>
              {keycloak.authenticated ? (
                <Button variant="contained" color="primary" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <p>Please log in or register to access the secure content.</p>
              )}
            </div>
          </Route>
        
      
    </Router>
    </>
  )
}

export default App
