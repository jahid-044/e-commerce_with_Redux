import Nav from './Components/Nav';
import GlobalContext from './GlobalContext/GlobalContext';
import Checkout from './Components/Checkout';
import Cards from './Components/Cards';
import Confirmation from './Components/Confirmation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmptyCart from './Components/EmptyCart';


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
          <Route exact path="/empty-cart" >
            <EmptyCart />
          </Route>
        </Switch>
      </GlobalContext>
    </Router>
  );
}

export default App;
