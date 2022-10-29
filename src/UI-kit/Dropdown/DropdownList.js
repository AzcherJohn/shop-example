export default function DropdownList(props){
   return (
      <ul className={props.className} 
         onAnimationEnd={() => {
            if (props.status === 0) props.onSetStatusDropdown(2)
         }}
         
      >
         {props.list && props.list.map((option, index) => 
            <li 
            name="option" 
            role="option"
            aria-selected={props.select === index}
            aria-posinset={index}
            className={`p-1 hover:bg-gray-200 dark:hover:bg-neutral-500 ${props.select === index && "bg-gray-300 dark:bg-neutral-400"}`} 
            onClick={() => props.onSelectionClick((option.value ?? option.label), index) } 
            key={index}>{option.label}
            </li>
         )}
      </ul>
   );
}