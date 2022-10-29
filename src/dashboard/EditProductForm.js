import InputText from "../UI-kit/InputText";
import InputNumber from "../UI-kit/InputNumber";
import Button from "../UI-kit/Button";

export default function EditProductForm({product, onSetProductEdit, onEditProduct}) {
   return <>{product && <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <InputText label="Name" value={product.name} onChange={e => onSetProductEdit({...product, name: e.target.value})} />
      <InputText label="Description" value={product.description} onChange={e => onSetProductEdit({...product, description: e.target.value})} />
      <InputText label="Storage" value={product.storage} onChange={e => onSetProductEdit({...product, storage: e.target.value})} />
      <InputNumber 
         label="Price" 
         value={product.price} 
         onValueChange={e => onSetProductEdit({...product, price: e})}
         currency
         decimal
      />
      <InputNumber 
         label="Quantity" 
         value={product.quantity} 
         onValueChange={e => onSetProductEdit({...product, quantity: e})}
         buttons
         quantity="10"
      />
      {product.nutrition && <>
         <InputNumber 
            label="Protein" 
            value={product.nutrition.protein} 
            onValueChange={e => onSetProductEdit({...product, nutrition: {...product.nutrition, protein: e}})}
            suffix="gr"
         />
         <InputNumber 
            label="Carbo" 
            value={product.nutrition.carbo} 
            onValueChange={e => onSetProductEdit({...product, nutrition: {...product.nutrition, carbo: e}})}
            suffix="gr"
         />
         <InputNumber 
            label="Fat" 
            value={product.nutrition.fat} 
            onValueChange={e => onSetProductEdit({...product, nutrition: {...product.nutrition, fat: e}})}
            suffix="gr"
         />
         <InputNumber 
            label="Salt" 
            value={product.nutrition.salt} 
            onValueChange={e => onSetProductEdit({...product, nutrition: {...product.nutrition, salt: e}})}
            suffix="gr"
         />
         <Button category="btn-primary" className="place-self-end" onClick={() => onEditProduct(true)}>Edit Product</Button>
      </>}
   </form>}</>;
}