import clsx from "clsx";
import { Children, useEffect, useState } from "react";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePaginator from "./TablePaginator";

export default function Table(props){
   const {header, children, size, paginator, rows, value, expandedRows, footer} = props;
   const columns = Children.toArray(children);
   const [actualPage, setActualPage] = useState(1);
   const [firstRow, setFirtsRow] = useState(1);
   const [showingRows, setShowingRows] = useState(rows)
   const [lastRow, setLastRow] = useState(showingRows < value.length ? showingRows : value.length);

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

   useEffect(() => {
      const minShowRows = (actualPage - 1) * showingRows;
      if (minShowRows >= value.length) {
         setActualPage(actualPage - 1);
      } else {            
         setFirtsRow(minShowRows + 1);
         const maxShowRows = actualPage * showingRows;
         setLastRow(maxShowRows < value.length ? maxShowRows : value.length);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[showingRows, actualPage, value])
   
   return<>
      <table className={classTable}>
         {header && <caption>{header}</caption>}
         <TableHead columns={columns} expandedRows={expandedRows} />
         <TableBody 
            columns={columns} 
            value={value} 
            rows={showingRows} 
            firstRow={firstRow} 
            lastRow={lastRow} 
            actualPage={actualPage} 
            expandedRows={expandedRows}
         />
         
         <tfoot>
            {footer && 
               <tr>
                  {footer}
               </tr>
            }   
            {paginator && 
               <TablePaginator 
                  rows={showingRows} 
                  rowsPerPage={props.rowsPerPage}
                  firstRow={firstRow} 
                  lastRow={lastRow}
                  totalRows={value.length}
                  actualPage={actualPage}
                  onShowingRows={setShowingRows}
                  onActualPage={setActualPage}
               />
            }
         </tfoot>
      </table>
   </>
}