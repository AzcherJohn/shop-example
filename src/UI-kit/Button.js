import clsx from "clsx";
export default function Button(props){
   const {children, className, category, type, specialClass, ...att} = props;

   const classButton = category.split("-");

   const classes = clsx({
      "text-white bg-teal-700 hover:bg-teal-600 active:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-500 dark:border dark:border-slate-500 dark:active:bg-teal-700": (category === "btn-primary" || category === "action-add") && !att.disabled,
      "text-gray-300 bg-teal-700/70": (category === "btn-primary" || category === "action-add") &&  att.disabled,
      "text-gray-800 bg-stone-200 hover:bg-stone-100 border border-slate-500": category === "btn-secundary" && !att.disabled,
      "text-gray-400 bg-stone-200/60": category === "btn-secundary" && att.disabled,
      "text-white bg-red-700 hover:bg-red-600 active:bg-red-500 font-semibold uppercase": category === "action-delete" && !att.disabled,
      "text-white bg-red-700/60 font-semibold uppercase": category === "action-delete" && att.disabled,
      "px-2 w-auto py-1 text-stone-800 bg-amber-400 hover:bg-amber-300 font-semibold uppercase": category === "action-remove" && !att.disabled,
      "px-2 w-auto py-1 text-stone-400 bg-orange-200 font-semibold uppercase": category === "action-remove" && att.disabled,
      "px-2 w-auto py-1 font-semibold uppercase bg-slate-300 hover:bg-slate-200 border-2 border-slate-400 active:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 dark:border-slate-700 dark:active:bg-stone-600": category === "action-toggle",
      "min-w-[1.75rem] min-h-[2rem] text-lg font-semibold flex justify-center items-center": classButton[0] === "action",
      "px-6 py-3": classButton[0] !== "action",
   },
   "rounded-md transition-colors duration-150 align-middle inline",
   className)


   return(<button type={type ? type : "button"} className={classes} {...att}>{children}</button>)
}