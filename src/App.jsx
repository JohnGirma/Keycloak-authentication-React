import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import SecureComponent from './SecureComponent';
function App() {
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/">
            <div>
              <h1>Welcome to the secure application!</h1>
              <SecureComponent role="admin">
                <p>This content is only visible to users with the "admin" role.</p>
              </SecureComponent>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
