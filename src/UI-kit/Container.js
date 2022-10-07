import Link from "./Link.js";
import Button from './Button';
import InputText from './InputText';

export default function Container(){
   return <>   
      <Link disabled={true}>Da click papu</Link>
      <Button className="primary" disabled={true}>Primario</Button>
      <Button className="primary">Primario</Button>
      <Button className="secundary">Secundario</Button>
      <Button className="secundary" disabled>Secundario</Button>
      <Button className="delete">x</Button>
      <InputText placeholder="Input"></InputText>
      <InputText placeholder="Input" disabled></InputText>
   </>
}