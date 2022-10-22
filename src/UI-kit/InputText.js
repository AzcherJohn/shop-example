import clsx from "clsx";

export default function InputText(props){
   const {type, label, placeholder, required, className, ...att} = props;

   const classes = clsx({
      "border-red-600 dark:border-orange-500": props.error,
      "border-slate-400": !props.error,
   },
   "p-2 border rounded-md hover:border-cyan-500 dark:bg-gray-600 disabled:bg-stone-200/60"
   );

   return (
      <label className={`grid gap-2 ${className}`}>
         <p>{label} {required ? <span className="text-red-600 font-bold">*</span>  : ""}</p>
         <input type={type ?? "text"} placeholder={placeholder ?? label} {...att} className={classes}></input>
      </label>
   )
}