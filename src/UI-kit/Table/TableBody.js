import TableTR from "./TableTR";

export default function TableBody({columns, value, rows, firstRow, lastRow, expandedRows}){

   const getRows = () => {
      const rowsReturn = rows ? value.slice(firstRow - 1, lastRow) : value;
      return rowsReturn.map((data) => {
         return <TableTR key={data.id} columns={columns} expandedRows={expandedRows} data={data} />         
      })
   };
   
   return (
      <tbody>
         {getRows()}
      </tbody>
   );
}