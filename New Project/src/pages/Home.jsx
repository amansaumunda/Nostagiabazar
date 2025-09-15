import React from 'react'
import { products } from '../data'
import ProductCard from '../components/ProductCard'

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default Home
