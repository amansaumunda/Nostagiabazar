import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#111] p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-retro text-neon-pink">NostalgiaBazaar</Link>
      <input type="text" placeholder="Search..." className="px-2 py-1 rounded text-black" />
    </nav>
  );
}
