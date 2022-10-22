export default function Footer(){
   return <>
   <footer className="text-white w-full bg-teal-700 gap-7 py-5 md:py-12 flex-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <section className="flex flex-col justify-center items-center col-span-1 sm:col-span-2 md:col-span-1">
         Legal information
      </section>
      <section className="flex flex-col justify-center items-center col-span-1">
         Social media
      </section>
      <section className="flex flex-col justify-center items-center col-span-1">
         Contact
      </section>
   </footer>
   </>
}