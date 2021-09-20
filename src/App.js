import Nav from './Components/Nav';
import './App.css';
import GlobalContext from './GlobalContext/GlobalContext';

function App() {
  return (
    <GlobalContext>
      <Nav />
    </GlobalContext>
  );
}

export default App;
