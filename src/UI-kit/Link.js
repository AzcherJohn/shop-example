export default function Link(props){
   const {href, ...att} = props
   let link = "#";
   if (href)
      link = href;
   return <>
      <a href={link} className="text-teal-700 hover:text-teal-600" {...att}>{props.children}</a>
   </>;
}