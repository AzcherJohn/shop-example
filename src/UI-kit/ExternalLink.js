import clsx from "clsx";

export default function ExternalLink(props){
   const {href, className, ...att} = props;
   const clasNam = className ?? "primary"
   const classes = clsx({
      "text-teal-700 hover:text-teal-600 dark:text-amber-500 dark:hover:text-amber-400": clasNam === "primary",
      "text-amber-500 hover:text-amber-400": clasNam === "secundary",
   },
   "ml-[.4rem]"
   )
   let link = "#";

   if (href)
      link = href;

   return <>
      <a href={link} className={classes} target="_blank" rel="noreferrer" {...att}>{props.children}</a>
   </>;
}