import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartTotalSelector } from "../store/productsStore";

import Fieldset from "../UI-kit/Fieldset";
import InputText from "../UI-kit/InputText";

export default function Payment(){

   const total = useSelector(cartTotalSelector);

   return (
      <section className="grid">
         <form>
            <Fieldset legend="Personal Information" className="grid gap-4 grid-cols-1 lg:grid-cols-2">
               <InputText label="First name"/>
               <InputText label="Last name"/>
               <InputText label="Email" />
               <InputText label="Address" />
            </Fieldset>
         </form>
         <div className="mt-10 flex gap-4 items-center">
            <p className="underline">Total: ${total}</p>
            <Link to="completed-purchase" state={{title:"¨Completed Purchase"}} className="btn-link">Buy</Link>
         </div>
      </section>   
   );
}