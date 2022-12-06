import { Link } from "react-router-dom";

export default function NotFound(){
   return <article className="w-full flex justify-center items-center flex-col text-center gap-7 self-center">
      <h1>Oh sorry the page you are looking is missing</h1>
      <div>The page could not be found. <Link to="/" state={{title:"Home"}} className="primary-link">Come back</Link></div>
   </article>
}