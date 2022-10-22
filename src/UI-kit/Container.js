import Link from "./Link.js";
import Button from './Button';
import InputText from './InputText';

export default function Container(){
   return <>   
      <Link disabled={true}>Da click papu</Link>
      <Button category="primary" disabled={true}>Primario</Button>
      <Button category="primary">Primario</Button>
      <Button category="secundary">Secundario</Button>
      <Button category="secundary" disabled>Secundario</Button>
      <Button category="delete">x</Button>
      <InputText placeholder="Input"></InputText>
      <InputText placeholder="Input" disabled></InputText>
   </>
}