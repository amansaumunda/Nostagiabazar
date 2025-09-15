import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="font-retro text-lg">Nostalgia Bazaar</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar
