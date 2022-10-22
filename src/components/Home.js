import { Link } from "react-router-dom";

export default function Home(){
   return<>
      <section className="flex justify-around gap-8 lg:gap-34 xl:gap-52 flex-col-reverse lg:flex-row">
         <article className="flex flex-col gap-5 flex-auto">
            <h1>Online Shopping Example</h1>
            <p>This is just an example of a <i>Online Shop</i>. This was the last proyect of a React certificated. I hope you enjoy the page as much as I do it making it and learning.</p>
            <p><a href="https://lordicon.com/">Animated icons by Lordicon.com</a></p>
            <p>https://lukaszadam.com/illustrations</p>
            <p>https://heroicons.com/</p>
            <div className="mt-5">
               <Link to="products" className="btn-link">Start shopping</Link>
            </div>
         </article>
         <figure className="p-5 bg-gradient-to-b from-blue-400 to-blue-700 rounded-3xl self-center w-48 lg:w-auto">
            <img src={require('../img/shop.png')} alt="shop"></img>
         </figure>
      </section>
   </>
}