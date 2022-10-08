import ProductCard from "../components/ProductCard";
import Button from "../UI-kit/Button";

export default function ListProduct(props){
   return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">      
      {props.products && props.products.map((product, index) => {
         return <>
         <div>
            <ProductCard details={product} key={product.id} />            
            <Button key={index} className="action-delete" onClick={() => props.onDeleteClick(product.id)}>Delete</Button>
         </div>
         </>
      })}
   </div>
}