export default function Fieldset(props){
   // eslint-disable-next-line no-unused-vars
   const {className, toggleable, legend, children } = props;
   return <>
      <fieldset className={`px-4 py-3 border rounded-lg border-slate-400 dark:border-slate-300 ${className ?? ""}`}>
         <legend className="ml-3 rounded-lg font-semibold border border-slate-400 dark:border-slate-300 py-1 px-3 bg-slate-200 dark:bg-slate-600 ">
            {legend}
         </legend>
         {children}
      </fieldset>
   </>;
}