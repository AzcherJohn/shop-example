import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DropdownList from "./DropdownList";
import DropdownPanel from "./DropdownPanel";

export default function Dropdown(props) {
   const {value, label, options, required, onSelect, className, ...att } = props;
   // Status = 0: close, status = 1: open, status = 2, inactive
   const [statusDropdown, setStatusDropdown] = useState(2);
   const [optionSelected, setOptionSelected] = useState(0);
   const [y, setY] = useState();
   const { middleH } = useWindowDimensions();
   const dropdownRef = useRef();

   const handleClickOutside = () => {
      if (statusDropdown === 1)
         setStatusDropdown(0);
   };
   
   function handleSelectionClick(value, index) {
      setOptionSelected(index);
      onSelect(value);
      setStatusDropdown(0);
   }

   function handleChangeStateClick(){     
         if (statusDropdown === 1)
            setStatusDropdown(0);
         else
            setStatusDropdown(1);
   }

   /*useEffect(() => {
      if (statusDropdown === 0) {    
         const timer = setTimeout(() => {
            setStatusDropdown(2);
         }, 300);
         return () => clearTimeout(timer);
      }
   },[statusDropdown])*/
   

   useEffect(() => {      
      const getPosition = () => {       
         const {y} = dropdownRef.current.getBoundingClientRect();
         setY(y);
      };
      getPosition();
      window.addEventListener("scroll", getPosition);
      return () => window.removeEventListener("scroll", getPosition);
    }, []);

    const classList = clsx({
      "animate-dropdown-open-t": ((statusDropdown === 1) && (y > middleH)),
      "animate-dropdown-close-t": (statusDropdown === 0) && (y > middleH),
      "animate-dropdown-open-b": (statusDropdown === 1) && (y <= middleH),
      "animate-dropdown-close-b": (statusDropdown === 0) && (y <= middleH),
      "bottom-10": y > middleH,
      "hidden": statusDropdown === 2,
    },
    "z-10 absolute max-h-64 shadow overflow-y-auto focus:border-green-800 w-full py-1 border border-slate-500 dark:border-slate-100 bg-white rounded-md hover:border-cyan-500 dark:bg-gray-600"
    );

   return (<>
   <label className={`grid gap-2 ${className}`} ref={dropdownRef}>
      <p>{label} {required ? <span className="text-red-700 font-bold">*</span> : ""}</p>
      <div name="select" className="flex flex-col relative" tabIndex={0} onBlur={handleClickOutside} {...att}>
         <DropdownPanel label={value} onChangeStateClick={handleChangeStateClick} status={statusDropdown} />
         <DropdownList className={classList} list={options} select={optionSelected} onSetStatusDropdown={setStatusDropdown} onSelectionClick={handleSelectionClick} status={statusDropdown} />
      </div>
   </label>
   </>);

   /*return (
   <label className="grid gap-2">
      {label} {required ? "*" : ""}
      <select className="p-2 border bg-white rounded-md hover:border-cyan-500 dark:bg-gray-600" {...att}>
         {options && options.map((option, index) => 
            <option className="hover:shadow-inner hover:shadow-cyan-500/50" value={option.value && option.label} key={index}>{option.label}</option>
         )}
      </select>
   </label>
   );*/
}