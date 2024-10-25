import './App.css';

import Navbar from './components/navbar/Navbar';
import Body from "./components/body/Body";

function Footer() {
  return null;
}

function App() {
  return (
      <>
          <div className="App">
              <Navbar/>
              <Body></Body>
              <Footer/>
          </div>
      </>
  );
}

export default App;
