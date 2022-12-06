import clsx from "clsx";

export default function ButtonPaginator(props){
   const {children, active, disabled, far, ...att} = props;
   const classes = clsx({
      "border border-gray-600 bg-blue-200": active,
      "hover:bg-gray-300 hover:bg-opacity-40": !active && !disabled,
      "opacity-50": disabled && !active,
      "opacity-70 text-sm": far && !active
   },
   "rounded-2xl px-3 py-1 bg-opacity-40 flex justify-center items-center"
   );

   return (
      <button className={classes} disabled={disabled} {...att}>{children}</button>
   );
}