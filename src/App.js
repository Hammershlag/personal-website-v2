import './App.css';

import Navbar from './components/navbar/Navbar';
import Body from "./components/body/Body";
import {useEffect, useState} from "react";
import Footer from "./components/footer/Footer";

function App() {

    const [lastVisible, setLastVisible] = useState('about')

    useEffect(() => {
        console.log('App:', lastVisible)
    }, [lastVisible]);

    return (
      <>
          <div className="App">
              <Navbar lastVisible={lastVisible} setLastVisible={setLastVisible}/>
              <Body lastVisible={lastVisible} setLastVisible={setLastVisible}></Body>
              <Footer/>
          </div>
      </>
  );
}

export default App;
