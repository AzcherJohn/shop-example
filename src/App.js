import { useContext, useEffect, useState } from 'react';

//import logo from './logo.svg';
import './App.css';
import StoreFront from './components/StoreFront';
import MainPanel from './dashboard/MainPanel';
import Button from './UI-kit/Button';

import { AppContext } from './context/AppContext';
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
    <main className={`container py-4 px-2 gap-3 grid mx-auto ${appCont.isDarkTheme && "bg-gray-800"}`}>
      <div>
        {isAdmin ? <MainPanel /> : <StoreFront />}
      </div>        
      <div>
        <Button className="btn-secundary" onClick={() => setIsLoggin(false)}>Logout</Button>
        <Button className="btn-primary" onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? "Go to Store" : "Go to Panel"}</Button>
        <Button className="btn-primary" onClick={() => appCont.onHandleThemeDark()}>Toggle Theme</Button>
      </div>
    </main>      
    </>
  } else {
    return <>
      <main className='px-8 py-4 gap-3 grid'>
        <h1 className='font-black text-lg'>Please Login</h1>
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
