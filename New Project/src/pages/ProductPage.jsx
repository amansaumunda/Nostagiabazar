import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data'

function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) return <p>Product not found</p>

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="h-60 mx-auto object-contain" />
      <h2 className="mt-4 text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <p className="text-red-500">{product.stock}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${product.nostalgia}%`}}></div>
      </div>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">← Back</Link>
    </div>
  )
}

export default ProductPage
