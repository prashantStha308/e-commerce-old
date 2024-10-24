// Home Page

"use client";
import Header from "./components/Header";
import { useProduct } from "./ContextProvider";
import Tiles from "./components/Tiles";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const products = useProduct();
  console.log("Products: ",products[0].images)

  // using the first 4 products as banners for now
  const bannerProducts = products.slice( 0 , 4 )
  const [ currentBanner , setCurrentBanner ] = useState(0);

  useEffect(() => {
    // Set an interval to change the banner every 2 seconds
    const intervalId = setInterval(() => {
      // Update the currentBanner state to cycle through bannerProducts
      setCurrentBanner(prevBanner => (prevBanner + 1) % bannerProducts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [bannerProducts.length]);

  return ( 
    <div id="Home">
      <Header currentPage={'home'} />
      <div className="bg-black">
        <Banner product={bannerProducts[currentBanner]} />
      </div>
        
      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="font-bold uppercase text-xl pb-4">Best sellers</h2>
        
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

          {/* Map the product array and pass to Tile */}
          {
            products.map(product =>{
              return( <Tiles key={product.id} product={product} /> )
            })
          }
        
        </div>
      </div>

      <div className="bg-gray-800">
        <section className="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
          <article className="flex-col justify-center inline-flex self-stretch  p-6">
            <h2 className="uppercase font-semibold text-xl">Design</h2>
            <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl">Our 30 Year Journey</strong>
            <p className="text-sm pb-4">Join us as we revisit our roots, tracing the path from bright idea to industry disruptors with a plan to fight climate change while creating beautiful things. </p>
            <button className="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">Join us</button>
          </article>
          <figure>
            <Image 
            src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
            alt="Banner" looding="lazy" width={1970} height={720} />
          </figure>
        </section>
      </div>
      <Footer />
    </div>
  );
}
