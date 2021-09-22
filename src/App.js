import Nav from './Components/Nav';
import './App.css';
import GlobalContext from './GlobalContext/GlobalContext';
import Checkout from './Components/Checkout';
import Modal from './Components/Modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cards from './Components/Cards';
import Confirmation from './Components/Confirmation';

function App() {
  return (
    <Router>
      <GlobalContext>
        <Nav />
        <switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/checkout" >
            <Checkout />
          </Route>
          <Route exact path="/confirmation" >
            <Confirmation />
          </Route>
        </switch>
      </GlobalContext>
    </Router>

  );
}

export default App;
