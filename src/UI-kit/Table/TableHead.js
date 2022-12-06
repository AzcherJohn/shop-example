export default function TableHead({columns, expandedRows}){
   const getHeaders = () => {
      return columns.map((column,index) => <th key={index+"th"}>{column.props.header}</th>)
   };

   return(
      <thead className="hidden lg:table-header-group">
         <tr>
            {expandedRows && <th className="w-[.1rem]"></th>}
            {getHeaders()}
         </tr>
      </thead>
   );
}