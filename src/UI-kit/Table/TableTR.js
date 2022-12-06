import { useState } from "react";

import ButtonPaginator from "../ButtonPaginator";
import Table from "./Table";
import Column from "./Column";


export default function TableTR({columns, data, expandedRows}){
   const [isExpanded, setIsExpanded] = useState(false);
   const arrayExpanded = Array.isArray(data[expandedRows]) ? data[expandedRows] : [data[expandedRows]];

   function handleChangeExpandClick(){
      setIsExpanded(!isExpanded);
   }

   function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   const getDataRow = (data, indexTr) => {
      return columns.map((column,index) =>
         <td key={"tr"+indexTr+"_td"+index} id={"tr"+indexTr+"_td"+index} className={`flex items-center w-full lg:table-cell lg:w-auto ${column.props.header ? "justify-between" : "justify-center" }`}>
            {column.props.header && 
               <span className="lg:hidden font-bold">{column.props.header}</span>
            }
            <span className={`text-right lg:text-left ${!column.props.header && "w-full flex justify-center"}`}>
               {`${column.props.prefix ?? ""}`}
               {column.props.body ? column.props.body(data) : data[column.props.field]} 
               {` ${column.props.suffix ?? ""}`}
            </span>
         </td>
      )
   };

   const getColumnExpended = () => {
      const arrayKeys = Object.keys(arrayExpanded[0]);
      return arrayKeys.map(object => <Column key={object} header={capitalizeFirstLetter(object)} field={object} /> )
   }
   
   return(<>
      <tr>
         { expandedRows && 
            <td className={`hidden lg:table-cell`}>
               <ButtonPaginator onClick={handleChangeExpandClick}><i className={`arrow ${isExpanded ? "down" : "right"}`}></i></ButtonPaginator>
            </td>
         }
         {getDataRow(data,data.id)}
         { expandedRows && 
            <td className={`lg:hidden flex items-center w-full justify-center my-4`}>
               <ButtonPaginator onClick={handleChangeExpandClick}><i className={`arrow ${isExpanded ? "down" : "right"}`}></i></ButtonPaginator>
            </td>
         }
      </tr>
      {
         isExpanded && 
            <tr>
               <td colSpan={"100%"} className="bg-black bg-opacity-10">
                  <div className="w-11/12 lg:w-8/12 mx-auto my-4">
                     <Table value={arrayExpanded} header={capitalizeFirstLetter(expandedRows)}>
                        {getColumnExpended()}
                     </Table>
                  </div>
                  
               </td>
            </tr>
      }
   </>); 
}