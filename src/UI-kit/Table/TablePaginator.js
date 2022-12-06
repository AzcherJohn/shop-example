import { useState } from "react";
import ButtonPaginator from "../ButtonPaginator";

import Dropdown from "../Dropdown/Dropdown";

export default function TablePaginator(props){
   const {rows, rowsPerPage, firstRow, lastRow, totalRows, actualPage, onShowingRows, onActualPage} = props
   const [pages, setPages] = useState(Math.ceil(totalRows / rows));
   const optionsPage = rowsPerPage.map(number => {return {label:number}});

   function handleRowsChangeClick(e){
      if (e !== rows){
         onShowingRows(e);
         setPages(Math.ceil(totalRows / e));
      }
   }

   function numbersButton(){
      const pagesShowing = pages > 5 ? (actualPage < 3 ? 5 : (actualPage + 2 > pages ? pages : actualPage +2)) : pages;
      let index = actualPage > 4 ? (pages - 2 <= actualPage ? pages - 5 : actualPage - 3) : actualPage === 4 && pages > 5 ? 1 : 0;
      let span = [];
      let i = 0
      for (index; index < pagesShowing; index++) {
         let currentPage = index + 1;
         span.push(
            <ButtonPaginator 
               key={index} 
               active={currentPage === actualPage} 
               disabled={currentPage === actualPage}
               far={(i === 0 && actualPage > 3 && pages > 5) || (i === 4 && currentPage !== pages && pages > 5)}
               onClick={() => onActualPage(currentPage)}
            >
               {currentPage}
            </ButtonPaginator>
         );
         i++
      }
      return span
   }

   return (
      <tr>
         <th colSpan="100%">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
               <div>Showing {firstRow} to {lastRow} of {totalRows}</div>
               <div className="flex gap-2 flex-col lg:flex-row">
                  <div className="flex gap-2 justify-center items-center">
                     <ButtonPaginator onClick={() => onActualPage(1)} disabled={actualPage === 1}><i className="arrow left"></i><i className="arrow left"></i></ButtonPaginator>
                     <ButtonPaginator onClick={() => onActualPage(actualPage - 1)} disabled={actualPage === 1}><i className="arrow left"></i></ButtonPaginator>
                  </div>
                  <div className="flex gap-2 justify-center items-center border-y-2 border-slate-400 dark:border-slate-300 my-2 py-2">
                     {numbersButton()}
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                     <ButtonPaginator onClick={() => onActualPage(actualPage + 1)} disabled={actualPage === pages}><i className="arrow right"></i></ButtonPaginator>
                     <ButtonPaginator onClick={() => onActualPage(pages)} disabled={actualPage === pages}><i className="arrow right"></i><i className="arrow right"></i></ButtonPaginator>
                  </div>
               </div>
               <Dropdown 
                  value={rows} 
                  onSelect={e => handleRowsChangeClick(e)}
                  options={optionsPage}
               ></Dropdown>
            </div>
         </th>
      </tr>
   );
}