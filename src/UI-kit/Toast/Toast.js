export default function Toast({positon, children}){
   
   return <aside className="fixed z-20 right-5 grid gap-4 top-20 lg:top-32">
      {children}
   </aside>
}