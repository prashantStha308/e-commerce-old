import React from 'react'

const Tiles = ( {product} ) => {
    console.log("Passed Product: ",product)
  return (
    <div className="tile">
        <img 
            className="border border-yellow-700 mb-1 border-solid w-full h-48 object-cover hover:border-yellow-500
            p-3" 
            alt={product.title} 
            src={product.images[0]} 
            loading="lazy" 
        />
        <h2 className="pt-2 m-0 leading-4 font-semibold">{product.title}</h2>
        <p>$210</p>
        <p className="text-green-500 italic font-medium">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  )
}

export default Tiles