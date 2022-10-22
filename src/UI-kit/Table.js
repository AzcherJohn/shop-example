import clsx from "clsx";
import { Children } from "react";

export default function Table(props){
   const {header, children, value, size} = props;
   const columns = Children.toArray(children);

   const sizeTable = () => {
      if (size) {         
         switch (size.toLowerCase()) {
            case "small":            
               return "small";
            case "large":    
               return "large";      
            default:
               return "normal";  
         }
      } else {
         return "normal";
      }
   };
   const classTable = clsx({
         "datatable-normal": sizeTable() === "normal",
      },
      "w-full table-auto datatable"
   );
   const getHeaders = () => {
      return columns.map((column,index) => <th key={index}>{column.props.header}</th>)
   };
   const getRows = () => {
      return value.map((data,index) => {
         return(
            <tr key={index}>
               {getDataRow(data)}
            </tr>
         ); 
      })
   };
   const getDataRow = (data) => {
      return columns.map((column,index) => {
         return <>
            <td key={index} className={`flex items-center w-full lg:table-cell lg:w-auto ${column.props.header ? "justify-between" : "justify-center" }`}>
               {column.props.header && 
                  <span className="lg:hidden font-bold">{column.props.header}</span>
               }
               <span className="text-right lg:text-left">{column.props.body ? column.props.body(data) : data[column.props.field]}</span>
            </td>
         </>
      })
   };

   return<>
      <table className={classTable}>
         {header && <caption>{header}</caption>}
         <thead className="hidden lg:table-header-group">
            <tr>
               {getHeaders()}
            </tr>
         </thead>
         <tbody>
            {getRows()}
         </tbody>
      </table>
   </>
}