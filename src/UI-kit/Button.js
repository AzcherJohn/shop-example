import clsx from "clsx";
export default function Button(props){
   const {children, className, type, ...att} = props;

   const classes = clsx({
      "text-white bg-teal-700 hover:bg-teal-600": className === "btn-primary" && !att.disabled,
      "text-gray-300 bg-teal-700/70": className === "btn-primary" && att.disabled,
      "text-gray-800 bg-stone-200 hover:bg-stone-100 border border-slate-500": className === "btn-secundary" && !att.disabled,
      "text-gray-400 bg-stone-200/60": className === "btn-secundary" && att.disabled,
      "text-white bg-red-700 hover:bg-red-600 font-semibold uppercase": className === "action-delete",
      "text-white bg-teal-700 hover:bg-teal-600 font-semibold uppercase": className === "action-add" && !att.disabled,
      "text-stone-800 bg-amber-400 hover:bg-amber-300 font-semibold uppercase": className === "action-remove" && !att.disabled,
      "text-stone-400 bg-orange-200 font-semibold uppercase": className === "action-remove" && att.disabled,
   })

   const classButton = className.split("-");

   return(<button type={type ? type : "button"} className={`rounded-md mx-2 transition-colors duration-150 align-middle inline ${ classButton[0] === "action" ? "px-2 py-1": "px-6 py-3"} ${classes}`} {...att}>{children}</button>)
}