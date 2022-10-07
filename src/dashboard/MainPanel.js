import { useEffect, useState } from "react";

import AddProductForm from "./AddProductForm";
import ListProduct from "./ListProduct";

export default function MainPanel(){   
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [validation, setValidation] = useState("");
   const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) ?? []);

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
   },[products])

   function handleFormSubmit(e){
      e.preventDefault();
      console.log("sumbit form")
      if (!name) {
         setValidation("Please enter a name");
         return ;
     }
     if (!description){
         setValidation("Please enter a description");
         return ;
     }

     setProducts([...products, {id:products.length + 1, name:name, description:description}])

     setValidation("");
     setName("");
     setDescription("");
   }
   function handleDeleteClick(id){
      setProducts(products.filter(product => product.id !== id))
   }

   return <>
      <AddProductForm 
         name={name} 
         description={description} 
         onSetName={setName} 
         onSetDescription={setDescription} 
         validation={validation}
         onFormSubmit={handleFormSubmit}
      />
      {products.length <= 0 ? <p>Add your first product</p> : <ListProduct products={products} onDeleteClick={handleDeleteClick}/>}
   </>
}