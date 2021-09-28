import Nav from './Components/Nav';
import Checkout from './Components/Checkout';
import Cards from './Components/Cards';
import Confirmation from './Components/Confirmation';
import Error from './Components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmptyCart from './Components/EmptyCart';
import { Provider } from 'react-redux'
import { store, persistor } from './Store/ShoppingStore';
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
            <Route exact path="*" >
              <Error />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
