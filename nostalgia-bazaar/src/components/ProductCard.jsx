import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#1a1a2e] p-4 rounded-xl shadow hover:shadow-neon-pink/40 transition">
      <img src={product.image} alt={product.name} className="rounded-lg w-full h-48 object-contain mb-3" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-400">{product.year}</p>
      <p className="text-neon-cyan font-semibold">₹{product.price}</p>
      {product.stock <= 2 ? (
        <p className="text-red-400">Only {product.stock} left!</p>
      ) : (
        <p className="text-green-400">In stock: {product.stock}</p>
      )}
      <div className="w-full bg-gray-700 h-2 rounded mt-2">
        <div className="bg-gradient-to-r from-neon-pink to-neon-cyan h-2 rounded" style={{ width: `${product.nostalgia}%` }}></div>
      </div>
      <Link to={`/product/${product.id}`} className="mt-3 inline-block bg-neon-purple px-3 py-1 rounded hover:opacity-80">View</Link>
    </div>
  );
}
