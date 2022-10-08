import { useContext, useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import { AppContext } from './context/AppContext';
//import logo from './logo.svg';
import './App.css';
import StoreFront from './components/StoreFront';
import MainPanel from './dashboard/MainPanel';
import Button from './UI-kit/Button';
import ProductDetail from './components/ProductDetail';
import NotesProduct from "./components/NotesProduct";

//import Container from './UI-kit/Container';

function App() {
  const [isLoggin, setIsLoggin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const appCont = useContext(AppContext);

  const title = "Azcher Shop ";

  useEffect(() => {
    if (!isLoggin) {
      document.title = title + " | Home";
    } else if (isAdmin) {      
      document.title = title + " | Dashboard";
    } else {
      document.title = title + " | Login";      
    }
  },[isLoggin, isAdmin])

  if (isLoggin){
    return <>
    <BrowserRouter>
      <main className={`container py-4 px-2 gap-3 grid mx-auto`}>
        <div>
          <Routes>
            <Route exact path="/" element={<StoreFront />} />
            <Route exact path="/dashboard" element={<MainPanel />} />
            <Route path="/products/:id" element={<ProductDetail />} >
              <Route exact path="notes" element={<NotesProduct />}/>
            </Route>
          </Routes>
        </div>        
        <div>
          <Button className="btn-secundary" onClick={() => setIsLoggin(false)}>Logout</Button>
          <Button className="btn-primary" onClick={() => appCont.onHandleThemeDark()}>Toggle Theme</Button>
          <Link to={isAdmin ? "/" : "/dashboard"} onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? "Go to Store" : "Go to Panel"}</Link>
        </div>
      </main> 
    </BrowserRouter>     
    </>
  } else {
    return <>
      <main className='px-8 py-4 gap-3 grid'>
        <h1 className={`font-black text-lg`}>Please Login</h1>
        <div>
          <Button className="btn-primary" onClick={() => setIsLoggin(true)}>Login</Button>
        </div>        
      </main>
      
    </>
  }
  /*return(<>
    <Container></Container>
    </>
  );*/
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
