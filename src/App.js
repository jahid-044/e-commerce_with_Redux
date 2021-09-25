import Nav from './Components/Nav';
import './App.css';
import GlobalContext from './GlobalContext/GlobalContext';
import Checkout from './Components/Checkout';
import Cards from './Components/Cards';
import Confirmation from './Components/Confirmation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <GlobalContext>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/checkout" >
            <Checkout />
          </Route>
          <Route exact path="/confirmation" >
            <Confirmation />
          </Route>
        </Switch>
      </GlobalContext>
    </Router>

  );
}

export default App;
