
import './App.css';
import Header from './components/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './components/Home/Home/Home';
import Dashboard from './components/Home/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
