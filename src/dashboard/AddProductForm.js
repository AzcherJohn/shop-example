import Button from "../UI-kit/Button";
import Dropdown from "../UI-kit/Dropdown/Dropdown";
import InputText from "../UI-kit/InputText";
import InputNumber from "../UI-kit/InputNumber";
import Fieldset from "../UI-kit/Fieldset";

export default function AddProductForm(props){
   function handleNutritionValues(value, key){
      switch (key) {
         case "protein":            
            props.onSetNutrition({...props.nutrition, "protein":value});
            break;
         case "carbo":            
            props.onSetNutrition({...props.nutrition, "carbo":value});
            break;
         case "fat":            
            props.onSetNutrition({...props.nutrition, "fat":value});
            break;
         case "salt":            
            props.onSetNutrition({...props.nutrition, "salt":value});
            break;
      
         default:
            break;
      }
   }
   return<>
      <form className="dark:bg-zinc-500 dark:text-white bg-zinc-300 grid px-3 sm:px-6 py-7 rounded gap-5" onSubmit={props.onFormSubmit}>
         <div className="grid grid-cols-6 gap-4">
            <Dropdown 
               label="Product"
               value={props.product} 
               onSelect={e => props.onSetProduct(e)}
               options={props.optionsProduct}
               className="col-span-6 sm:col-span-2 lg:col-span-1"
            />
            { props.product === "Other" && 
               <InputText 
                  label="Name"
                  placeholder="Enter the name" 
                  error={props.validation && !props.name} 
                  value={props.name} 
                  onChange={e => props.onSetName(e.target.value)}
                  required
                  className="col-span-6 sm:col-span-4 lg:col-span-2"
               />
            }
            <InputText 
               label="Description"
               placeholder="Enter the description" 
               error={props.validation && !props.description} 
               value={props.description} 
               onChange={e => props.onSetDescription(e.target.value)}
               required
               className="col-span-6 sm:col-span-4 lg:col-span-3"
            />
            <InputText 
               label="Storage"
               placeholder="Write the instructions for the storage" 
               value={props.storage} 
               onChange={e => props.onSetStorage(e.target.value)}
               className="col-span-6 sm:col-span-4 lg:col-span-2"
            />
            <InputNumber 
               label="Price"
               currency
               decimal
               value={props.price} 
               onValueChange={e => props.onSetPrice(e)}
               error={props.validation && props.price <= 0} 
               required
               className="col-span-6 sm:col-span-2 lg:col-span-1"
            />
            <InputNumber 
               label="Quantity"
               value={props.quantity} 
               onValueChange={e => props.onSetQuantity(e)}
               error={props.validation &&  props.quantity <= 0} 
               required
               buttons
               quantity="10"
               className="col-span-6 sm:col-span-2 lg:col-span-1"
            />
            { props.product === "Other" && 
               <div className="grid gap-2 col-span-6 sm:col-span-4 lg:col-span-2">
                  <p className={props.validation && !props.image && props.product === "Other" && "text-red-600 dark:text-orange-500"}>Select a image for your product *</p>
                  <section>
                     <figure className="flex justify-around">
                        {props.optionsImage.map((images, index) => 
                           <img 
                              src={require("../img/" + images)} 
                              alt={images} key={index} 
                              className={"h-11 bg-zinc-100 dark:bg-zinc-300 rounded-xl px-1 hover:border-b-4 hover:border-l-4 hover:border-blue-400 active:bg-gray-200 " + (props.image === images && "border-4 border-amber-400")}
                              onClick={() => props.onSetImage(images)}
                           />
                        )}
                     </figure>
                  </section>
               </div>
            }
            <Fieldset legend="Nutrition" className="col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
               {Object.keys(props.nutrition).map(function(key, index) {
                  return <InputNumber 
                              key={index}
                              label={key}
                              value={props.nutrition[key]} 
                              onValueChange={e => handleNutritionValues(e, key)}
                              error={props.validation && props.nutrition[key] <= 0} 
                              required
                              suffix="gr"
                           /> 
               })}               
               
            </Fieldset>
         </div>         
         <div className="flex justify-between items-center">
            <div className="dark:text-orange-400 text-red-500">{props.validation}</div>
            <Button category="btn-primary" type="submit">Add Product</Button>
         </div>
      </form>
   </>
}