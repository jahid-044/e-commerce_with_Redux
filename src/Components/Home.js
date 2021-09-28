import Nav from './Nav';
import Checkout from './Checkout';
import Cards from './Cards';
import Confirmation from './Confirmation';
import Error from './Error';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import EmptyCart from './EmptyCart';
import { Provider } from 'react-redux'
import { store, persistor } from '../Store/ShoppingStore';
import { PersistGate } from 'redux-persist/integration/react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';



function Home() {
    return (
        <Router>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Cards />
                        </Route>
                        <Route exact path="/about" >
                            <AboutUs />
                        </Route>
                        <Route exact path="/contact" >
                            <ContactUs />
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

export default Home;
