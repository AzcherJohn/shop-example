export default function DropdownPanel(props){
   return (
      <div 
      className="z-20 relative p-2 border bg-white rounded-md hover:border-cyan-500 dark:bg-gray-600 flex justify-between items-center gap-3" 
      onClick={props.onChangeStateClick}>
         <span>{props.label}</span>
         <i className={`arrow down ${props.status === 1 ? "animate-dropdown-open-arrow" : "animate-dropdown-close-arrow"}`} />
      </div>
   );
}