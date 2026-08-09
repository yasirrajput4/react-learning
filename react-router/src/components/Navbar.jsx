import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">App</span>
        <div className="flex items-center space-x-1 sm:space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/product"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Product
          </Link>
          <Link
            to="/courses"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Courses
          </Link>
        </div>
      </nav>
    </header>
  );
}
