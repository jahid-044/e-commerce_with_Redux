import Nav from './Components/Nav';
import Checkout from './Components/Checkout';
import Cards from './Components/Cards';
import Confirmation from './Components/Confirmation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmptyCart from './Components/EmptyCart';
import { Provider } from 'react-redux'
import store from './Store/ShoppingStore';


function App() {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}

export default App;
