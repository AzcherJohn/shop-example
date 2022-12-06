import ExternalLink from "../UI-kit/ExternalLink";

export default function Home(){
   return<>
      <section className="flex justify-around gap-8 lg:gap-34 xl:gap-52 flex-col-reverse lg:flex-row">
         <article className="flex flex-col gap-5 flex-auto">
            <h1>Online Shopping Example</h1>
            <p>This is just an example of a <i>Online Shop</i>. This was the last proyect of a <ExternalLink href="https://react-tutorial.app/">React certificated</ExternalLink>. And all the resources I made by my self or were open source, below I tell which resources were made by third parties.</p>
            <p>If you want to know more technical information about the code, please visit the repository on <ExternalLink href="https://github.com/AzcherJohn/shop-example">GitHub</ExternalLink>.</p>
            <p>If you want to know how to use this page please go to the <i><b>How to</b></i> section.</p>
            <hr></hr>
            <p>The icons I used for the product were taken from the page: <ExternalLink href="https://lordicon.com/">Lordicon</ExternalLink>.</p>
            <p>The ilustration of this page was made by <ExternalLink href="https://lukaszadam.com/illustrations">Lukasz Adam</ExternalLink>.</p>
            <p>The icons for the buttons like for example, the edit button, trash button, toggle, etc, are part of the <ExternalLink href="https://heroicons.com/">Hero Icons library</ExternalLink>.</p>
            <p>The icon of GitHub and Linkedin that yuo can find in the footer are from <ExternalLink href="https://iconos8.es/">iconos8</ExternalLink>.</p>
            <hr></hr>
            <p><b>*NOTE:</b> All the information for this page is saved in the browser, if you want to delete it you can clean your cache browser or click in the “Clean Information” button on the menu navbar.</p>
         </article>
         <figure className="p-5 bg-gradient-to-b from-blue-400 to-blue-700 rounded-3xl self-center w-48 lg:w-auto">
            <img src={require('../img/shop.png')} alt="shop"></img>
         </figure>
      </section>
   </>
}