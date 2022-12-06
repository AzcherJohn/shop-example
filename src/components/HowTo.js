export default function HowTo(){
   const info = [
      {title:"How to add a product", image:"dashboard-addForm.png", message:"First of all you need to add products to have a better look of the complete page, so first you have to go to the Dashboard section in there you will find a form to start creating your catalog of products."},
      {title:"How to manage the catalog", image:"dashboard-list.png", message:"Once you have some products you will manage them in the table, you can see, edit or remove them, everything you want to do it you can make it from this section."},
      {title:"How to add products to your cart", image:"addProductToCart.png", message:"There are 2 different ways to make this step, you can go to the products section and from there you can see all the products and add them to your cart. Or you can click in any of them and see all the information and from there you can add too."},
      {title:"How can I see the products in my cart?", image:"cart-list.png", message:"You can click on the “Cart” Button on the menu navbar and there you will see all the information of your Cart products, including the total of products and the total amount you will pay for them."},
      {title:"How can I pay?", image:"payment.png", message:"At the bottom of the “Cart” page there you will find a button called “Go to pay” and with this button you will go to the Payment page where you can put all your information to make the payment."},
      {title:"What happens when I “pay”?", image:"checkout.png", message:"To conclude all the flow at the end you will see the Checkout page. In this page you will see all the information of your purchase and then you will go to the home page"},
   ];

   return (
      <section className="flex flex-col gap-12 items-center">
         <h1>How to use the page</h1>
         <hr></hr>
         {info.map((element, index) =>             
            <section key={index}>               
               <h2 className={`font-semibold text-lg mb-6 underline ${index % 2 === 1 ? "text-right" : "text-left"}`}>{element.title}</h2>
               <div className={`flex gap-8 items-center flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : null}`}>
                  <p className="grow">{element.message}</p>
                  <figure className="flex-none w-[99%] lg:w-[30rem] xl:w-[50rem]">
                     <img 
                        src={require(`../img/${element.image}`)} 
                        alt={element.image}
                        className="border-4 border-amber-500 rounded-xl"
                     />
                  </figure>
               </div>
               
               <div className={`bg-gradient-to-b from-emerald-700 via-emerald-400 to-emerald-700 h-16 lg:h-20 xl:h-24 relative -z-10 -top-5 ${index % 2 === 1 ? "rounded-r-full -left-5 md:-left-16 lg:-left-24" : "rounded-l-full -right-5 md:-right-16 lg:-right-24"}`}></div>
            </section>
         )}
      </section>
   );
}