import { useParams, Link } from "react-router-dom";
import products from "../data";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-[#1a1a2e] p-6 rounded-xl shadow">
      <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4 rounded" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-300 mb-2">{product.description}</p>
      <p className="text-neon-cyan font-semibold mb-2">₹{product.price}</p>
      {product.stock <= 2 ? (
        <p className="text-red-400 mb-2">Only {product.stock} left!</p>
      ) : (
        <p className="text-green-400 mb-2">In stock: {product.stock}</p>
      )}
      <div className="w-full bg-gray-700 h-2 rounded mb-4">
        <div className="bg-gradient-to-r from-neon-pink to-neon-cyan h-2 rounded" style={{ width: `${product.nostalgia}%` }}></div>
      </div>
      <button className="bg-neon-purple px-4 py-2 rounded hover:opacity-80 mr-2">Buy Now</button>
      <button className="bg-neon-cyan px-4 py-2 rounded hover:opacity-80">Add to Wishlist</button>
      <div className="mt-4">
        <Link to="/" className="text-neon-pink hover:underline">← Back to Marketplace</Link>
      </div>
    </div>
  );
}
