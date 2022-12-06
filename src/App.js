import { useState, useEffect, useContext } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import { AppContext } from './context/AppContext';

import Toast from './UI-kit/Toast/Toast';
import ToastCard from './UI-kit/Toast/ToastCard';

import MainPanel from './dashboard/MainPanel';

import ProductDetail from './components/product/ProductDetail';
import ProductDescription from "./components/product/ProductDescription";
import ProductStorage from './components/product/ProductStorage';
import ProductNutrition from './components/product/ProductNutrition';

import StoreFront from './components/StoreFront';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HowTo from './components/HowTo';
import Payment from './components/Payment';
import CompletedPurchase from './components/CompletedPurchase';

//import Container from './UI-kit/Container';

function App() {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("animate-fade-in");
  const [transitionNested, setTransistionNested] = useState("animate-tabs-in");
  const locationArr = location.pathname?.split("/") ?? [];
  const appContext = useContext(AppContext);

  function handleProductView(prod){
    setProduct(prod);
  };

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) 
      if (!location.state.nested)
        setTransistionStage("animate-fade-out");
      else      
        setTransistionNested("animate-tabs-out");
  }, [location, displayLocation]);

  return <>
    <header className="bg-white dark:bg-slate-800 w-full px-4 py-3 lg:px-10 lg:py-7 border-b-2 dark:border-gray-400 shadow-lg dark:shadow-stone-500 z-10 fixed top-0">
      <Navbar />
    </header>
    
    <main 
      className={`${transitionStage} duration-[1ms] lg:duration-150 flex-auto flex py-5 lg:py-14 2xl:py-20 px-5 md:px-16 lg:px-24 xl:px-38 bg-slate-200 dark:bg-slate-600 mt-14 lg:mt-24 relative z-0`}
      onAnimationEnd={() => {
        if (transitionStage === "animate-fade-out") {
          setTransistionStage("animate-fade-in");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation} key={locationArr[1]} >
        <Route exact path="/" element={<Home />} />
        <Route exact path="products" element={<StoreFront />} />
        {/*<Route exact path="/products/:id" element={<ProductDetail onProductView={handleProductView} />} >
          <Route exact index path="/products/:id" element={<ProductDescription description={product.description} />} />
          <Route exact path="storage" element={<ProductStorage storage={product.storage} />} />
          <Route exact path="nutrition" element={<ProductNutrition nutrition={product.nutrition} />} />
        </Route>*/}
        <Route exact path="/products/:id/*" 
          element={<ProductDetail onProductView={handleProductView} >
            <div className={`${transitionNested} py-4 px-1`}
              onAnimationEnd={() => {
                if (transitionNested === "animate-tabs-out") {
                  setTransistionNested("animate-tabs-in");
                  setDisplayLocation(location);
                }
              }}
            >               
              <Routes location={displayLocation} key={locationArr[2]} >
                <Route exact index path="/*" element={<ProductDescription description={product.description} />} />
                <Route exact path="/storage" element={<ProductStorage storage={product.storage} />} />
                <Route exact path="/nutrition" element={<ProductNutrition nutrition={product.nutrition} />} />
              </Routes>
            </div>
          </ProductDetail>} >
        </Route>
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="dashboard" element={<MainPanel />} />
        <Route exact path="how-to" element={<HowTo />} />
        <Route exact path="payment" element={<Payment />} /> 
        <Route  exact path="payment/completed-purchase" element={<CompletedPurchase />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>      

    <Toast>
      {appContext.toastList && 
        appContext.toastList.map(toast => <ToastCard toast={toast} key={toast.id} />
      )}
    </Toast>
    
    <Footer />
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
