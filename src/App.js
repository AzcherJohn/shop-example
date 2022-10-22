import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import { productStore } from './store/products';
import Button from './UI-kit/Button';

import MainPanel from './dashboard/MainPanel';

import StoreFront from './components/StoreFront';
import ProductDetail from './components/ProductDetail';
import ProductDescription from "./components/ProductDescription";
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductStorage from './components/ProductStorage';
import ProductNutrition from './components/ProductNutrition';

//import Container from './UI-kit/Container';

function App() {
  const [isLoggin, setIsLoggin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [product, setProduct] = useState({});

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

  function handleProductView(prod){
    setProduct(prod);
  }

  return <>
    <Provider store={productStore}>
      <BrowserRouter>
        <header className="bg-white dark:bg-slate-800 w-full px-4 py-3 lg:px-10 lg:py-7 border-b-2 dark:border-gray-400 shadow-lg dark:shadow-stone-500 z-10 fixed top-0">
          <Navbar />
        </header>
        <main className='flex-auto flex py-5 lg:py-14 2xl:py-20 px-5 md:px-16 lg:px-24 xl:px-38 bg-slate-200 dark:bg-slate-600 mt-14 lg:mt-24 relative z-0'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="products" element={<StoreFront />} />
            <Route exact path="/products/:id" element={<ProductDetail onProductView={handleProductView} />} >
              <Route exact index path="/products/:id" element={<ProductDescription description={product.description} />} />
              <Route exact path="storage" element={<ProductStorage storage={product.storage} />} />
              <Route exact path="nutrition" element={<ProductNutrition nutrition={product.nutrition} />} />
            </Route>
            <Route exact path="cart" element={<Cart />} />
            <Route exact path="dashboard" element={<MainPanel />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  </>;
/*
  if (isLoggin){
    return <>
    <BrowserRouter>
      <main className={`container py-4 px-2 gap-3 grid mx-auto`}>
        <div>
          <Routes>
            <Route exact path="/" element={<StoreFront />} />
            <Route exact path="/dashboard" element={<MainPanel />} />
            <Route path="/products/:id" element={<ProductDetail onProductView={handleProductView} />} >
              <Route exact path="notes" element={<NotesProduct description={product.description} />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
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
  }*/
}

export default App;
