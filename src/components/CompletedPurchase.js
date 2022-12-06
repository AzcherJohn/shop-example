import Cart from "./Cart";

export default function CompletedPurchase(){
   return (
      <section className="grid gap-4">
         <div className="flex items-center flex-col gap-2">
            <h1>Thanks for shopping with us!</h1>
            <hr></hr>
         </div>
         <div>
            The products will arrive to you in a maximum of 3 days.
         </div>
         <div>
            This is what you bought:
         </div>
         <Cart final/>
      </section>
   );
}