import Column from "../UI-kit/Table/Column";
import Table from "../UI-kit/Table/Table";

export default function ProductNutrition({nutrition}){
   return <>{nutrition && <Table value={[nutrition]}>
         <Column header="Protein" field="protein" suffix="gr." />
         <Column header="Carbo" field="carbo" suffix="gr." />
         <Column header="Fat" field="fat" suffix="gr." />
         <Column header="Salt" field="salt" suffix="gr." />
      </Table>}
      </>;
}