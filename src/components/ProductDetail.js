import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { addProduct } from "../store/productsStore";
import Button from "../UI-kit/Button";
import InputNumber from "../UI-kit/InputNumber";

export default function ProductDetail({onProductView, children}){
   const params = useParams();
   const appCont = useContext(AppContext);
   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);
   const productFromCart = cart.find(prod => prod.id === parseInt(params.id));
   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(productFromCart ? parseInt(productFromCart.quantity) : 1);


   useEffect(() => {
      const products = JSON.parse(localStorage.getItem("products"));
      const newProduct = products.find(prod => prod.id === parseInt(params.id));

      setProduct(newProduct);
      onProductView(newProduct);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   return <>
      <section>
         <Link to="/products" className="primary-link" state={{title:"Products"}}>{"<"} Back products</Link>
         <section className="flex flex-col lg:flex-row w-full gap-5 justify-between mt-4">
            <section className="flex flex-auto gap-9 flex-col items-center sm:flex-row sm:justify-center">
               <figure>
                  {product.img && <img className="product-image-big" src={appCont.getImage(product.img)} alt={product.name + "_Image"} />}
               </figure>
               <section className="flex flex-col gap-4">               
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <h5 className="text-xl font-medium">${product.price ?? "10"}</h5>
                  <InputNumber buttons value={quantity} max={product.quantity} min="1" onValueChange={e => setQuantity(e)} />
                  <Button 
                     category="btn-primary" 
                     onClick={() => dispatch(addProduct({
                        id: product.id,
                        name: product.name,
                        img: product.img,
                        price: product.price, 
                        quantity:quantity
                     }))}
                  >
                     Add to cart
                  </Button>
               </section>
            </section>
            <section className="flex-auto">
               <nav className="flex gap-5 border-b-[1px] border-slate-400 px-4 pb-1">               
                  <NavLink end className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to=".">Description</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to="storage">Storage</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to="nutrition">Nutrition</NavLink>
               </nav>

               {children}

            </section>         
         </section>
      </section>
   </>
}