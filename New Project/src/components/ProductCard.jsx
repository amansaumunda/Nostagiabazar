import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="h-40 mx-auto object-contain" />
      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <p className="text-red-500">{product.stock}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${product.nostalgia}%`}}></div>
      </div>
      <Link to={`/product/${product.id}`} className="mt-3 inline-block text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  )
}

export default ProductCard
