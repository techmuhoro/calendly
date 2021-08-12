import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {home, error, signUp} from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/sign-up" exact component={signUp} />
          <Route component={error} />
        </Switch>
      </Router>
    </>
  )
}

export default App

