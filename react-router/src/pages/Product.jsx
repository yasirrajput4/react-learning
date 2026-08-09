import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Product Page</h1>
          <nav className="flex space-x-2">
            <Link
              to="men"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Men
            </Link>
            <Link
              to="women"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Women
            </Link>
          </nav>
        </div>
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Product;
