import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

import AddProductForm from "./AddProductForm";
import ListProduct from "./ListProduct";

const optionsProduct = [
   {label:"Apple", img:"543-apple.svg"},
   {label:"Algae", img:"1841-algae.svg"},
   {label:"French Fries", img:"567-french-fries-chips.svg"},
   {label:"Pizza", img:"13-pizza.svg"},
   {label:"Sausage", img:"563-sausage.svg"},
   {label:"Other", img:""},
];
const nutritionTable = {
   protein:0,
   carbo:0,
   fat:0,
   salt:0
};
const optionsImage = ["1414-circle.svg","1416-triangle.svg","1417-rounded-square.svg","1422-polygon.svg",]

export default function MainPanel(){   
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [nutrition, setNutrition] = useState(nutritionTable);
   const [storage, setStorage] = useState("");
   const [price, setPrice] = useState(0);
   const [quantity, setQuantity] = useState(1);
   const [image, setImage] = useState("1");
   const [product, setProduct] = useState(optionsProduct[0].label);
   const [validation, setValidation] = useState("");
   const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) ?? []);

   const appCont = useContext(AppContext);

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
   },[products])

   function handleFormSubmit(e){
      e.preventDefault();
      console.log("sumbit form")
      if (!name && product === "Other") {
         setValidation("Please enter a name");
         return ;
      }
      if (!description){
         setValidation("Please enter a description");
         return ;
      }
      if (!image &&  product === "Other"){
         setValidation("Please select a image");
         return ;
      }
      
      setProducts([...products, {
         id: products.length + 1, 
         name: product === "Other" ? name : product, 
         description: description,
         nutrition: nutrition,
         storage: storage,
         price: price,
         quantity: quantity,
         img: product === "Other" ? image : optionsProduct.find(prod => prod.label === product).img,
      }])

      setValidation("");
      setName("");
      setDescription("");
      setProduct(optionsProduct[0].label);     
      setNutrition(nutritionTable);
      setStorage("");
      setPrice("0");
      setQuantity("1");
      setImage("");
   }
   function handleDeleteClick(deletedProduct){
      setProducts(products.filter(prod => prod.id !== deletedProduct.id))
   }

   return <>
      <section className="grid gap-8">
         <AddProductForm 
            name={name} 
            description={description} 
            product={product} 
            nutrition={nutrition}
            storage={storage}
            price={price}
            quantity={quantity}
            optionsProduct={optionsProduct}
            optionsImage={optionsImage}
            image={image}
            onSetName={setName} 
            onSetDescription={setDescription} 
            onSetProduct={setProduct}   
            onSetNutrition={setNutrition}
            onSetStorage={setStorage}
            onSetPrice={setPrice}
            onSetQuantity={setQuantity}
            onSetImage={setImage}
            validation={validation}
            onFormSubmit={handleFormSubmit}
         />
         {products.length <= 0 ? 
            <p className={appCont.isDarkTheme && "text-white"}>Add your first product</p> 
         : 
            <ListProduct products={products} onDeleteClick={handleDeleteClick}/>
         }
      </section>
   </>
}