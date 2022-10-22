/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx";
import { useEffect, useState } from "react";

import Button from "./Button";

export default function InputText(props){
   const {
      label, 
      placeholder, 
      required, 
      value, 
      type, 
      currency, 
      decimal, 
      onValueChange, 
      separator, 
      buttons, 
      quantity, 
      className,
      suffix,
      ...att} = props;
   const [newValue, setNewValue] = useState(value);

   const classes = clsx({
         "border-red-600 dark:border-orange-500": props.error,
         "border-slate-400": !props.error,
         "pl-12 w-[calc(100%-3.5rem)]": currency,
         "pr-10 w-[calc(100%-3.5rem)]": suffix,
         "rounded-md" : !buttons,
         "w-[calc(100%-3.5rem)]": buttons
      },
      "p-2 border flex-1 hover:border-cyan-500 dark:bg-gray-600 disabled:bg-stone-200/60"
   );
   const classCurrency = clsx({
         "ml-2" : !buttons,
         "ml-9": buttons
      },
      "absolute mt-[0.6rem] text-slate-500 dark:text-slate-300 font-semibold uppercase"
   );
   const classSuffix = clsx({
         "right-0 mr-1" : !buttons,
         "right-0 mr-9": buttons
      },
      "absolute mt-[0.6rem] text-slate-500 dark:text-slate-300"
   );

   useEffect(() => {
      if (isNaN(newValue)) {
         setNewValue(0)
      }
   },[newValue]);

   useEffect(() => {
      setNewValue(value)
   },[value]);

   const quant = quantity ? parseFloat(quantity) :  1;

   function handleFormatNumberChange(e){
      let t = 0
      const oneCharacterDecimal = e.target.value.replace(/\./g, match => ++t === 2 ? '' : match)
      // eslint-disable-next-line no-useless-escape
      const numberValue = oneCharacterDecimal.toString().replace(/[`~!@#$%^&*()_|+\-=?;:'",°<>ñ' '\{\}\[\]\\\/a-z]/gi, "");
      setNewValue(numberValue);
   }

   function handleFormatNumberBlur(action){
      let val = newValue;
      if (action === "add") {
         val = parseFloat(val) + quant;
      }else  if (action === "less") {
         val = parseFloat(val) - quant;
         if (val <= 0) {
            val = 0;
         }
      }
      const lastValue = (parseFloat(val).toFixed(decimal ? (decimal === true ? 2 : parseInt(decimal)) : 0 )).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
      setNewValue(lastValue);
      onValueChange(lastValue)
   }

   function handleFormatNumberFocus(){
      setNewValue(value.replace(/,/g, ""));
   }
   /*
   function handleIncrementClick(){
      setNewValue(oldValue => parseFloat(oldValue) + quant);
   }

   function handleDecrementClick(){
      setNewValue(oldValue => parseFloat(oldValue) - quant);
   }
   */
   return (
      <label className={`grid gap-2 ${className}`}>
         <p className="first-letter:uppercase">{label} {required ? <span className="text-red-600 font-bold">*</span>  : ""}</p>
         <div className="flex relative">            
            {buttons && <Button category="action-delete" className="rounded-r-none" onClick={() => handleFormatNumberBlur("less")}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
               </svg>   
            </Button>}
            {currency && <span className={classCurrency}>{currency === true ? "USD" : currency.substring(0,3) }</span>}
            <input 
               type="text" 
               placeholder={placeholder ?? label} 
               value={newValue} 
               {...att} 
               className={classes}
               onBlur={() => handleFormatNumberBlur()}
               onChange={handleFormatNumberChange}
               onFocus={handleFormatNumberFocus}
            />    
            {suffix && <span className={classSuffix}>{suffix && suffix.substring(0,3) }</span>}        
            {buttons && <Button category="action-add" className="rounded-l-none " onClick={() => handleFormatNumberBlur("add")}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
               </svg>
            </Button>}
         </div>
      </label>
   )
}