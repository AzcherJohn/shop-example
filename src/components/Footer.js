import ExternalLink from "../UI-kit/ExternalLink";

export default function Footer(){
   return <>
   <footer className="text-white w-full bg-teal-700 gap-7 py-5 md:py-8 px-5 md:px-12 flex-none grid grid-cols-1 sm:grid-cols-3">
      <section className="flex flex-col gap-2 col-span-1 sm:col-span-2 md:col-span-1">
         <h1>Legal information</h1>
         <hr></hr>
         <p>This page is not a real E-Commerce, it's a final project for a React certification. 
         To know all the resources that I used for made this project please read the <b>Home</b> section.</p>
      </section>
      <section className="flex flex-col gap-2 col-span-1">
         <h1>Social media</h1>
         <hr></hr>
         <div className="flex items-center">
            <ExternalLink className="secundary" href="https://www.linkedin.com/in/jonathan-azcarraga-hernandez/?locale=en_US">
               <img src={require('../img/icons8-linkedin-rodeado-de-círculo-48.png')} alt="linkedin"/>
            </ExternalLink>
            <p>You can check out my linkedin profile.</p>
         </div>
         <div className="flex items-center">
            <ExternalLink className="secundary" href="https://github.com/AzcherJohn/shop-example">
               <img src={require('../img/icons8-github-48.png')} alt="linkedin"/>
            </ExternalLink>
            <p>You can view the code of this web in my github.</p>
         </div>
         
      </section>
      <section className="flex flex-col gap-2 col-span-1">
         <h1>Contact</h1>
         <hr></hr>
         <p>If you want to contact with please send me a email: <b>john.azc.her@gmail.com</b></p>
      </section>
   </footer>
   </>
}