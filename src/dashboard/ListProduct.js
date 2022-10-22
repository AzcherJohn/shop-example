import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Button from "../UI-kit/Button";
import Column from "../UI-kit/Column";
import Table from "../UI-kit/Table";

export default function ListProduct(props){
   const appCont = useContext(AppContext);
   const buttonDelete = (product) => {
      return <Button category="action-delete" onClick={() => props.onDeleteClick(product)}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
         </svg>
      </Button>
   };
   const showImage = (product) => {
      return <img src={appCont.getImage(product.img)} className="product-image" alt={product.name}/>
   }
   return <div className="grid gap-8">   
      <Table header="Products" value={props.products}>
         <Column body={showImage} /> 
         <Column header="Name" field="name" /> 
         <Column header="Description" field="description" /> 
         <Column header="Storage" field="storage" /> 
         <Column header="Price" field="price" /> 
         <Column header="Qty" field="quantity" /> 
         <Column body={buttonDelete} /> 
      </Table>  
      {/*props.products && props.products.map((product, index) => {
         return <>
         <div key={product.id}>
            <ProductCard details={product} />            
            <Button category="action-delete" onClick={() => props.onDeleteClick(product.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
               </svg>
            </Button>
         </div>
         </>
      })*/}
   </div>
}