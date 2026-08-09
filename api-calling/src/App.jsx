import { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://api.freeapi.app/api/v1/public/randomproducts",
        );
        const data = await res.json();
        setProducts(data?.data?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-400 p-6 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">Products</h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Brand & Rating Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  {product.brand ? (
                    <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded font-medium">
                      {product.brand}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  {product.rating && (
                    <span className="text-amber-400 text-xs font-semibold">
                      ★ {product.rating}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h2 className="font-semibold text-zinc-100 text-base line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-zinc-400 text-xs mt-1.5 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                    Price
                  </span>
                  <span className="text-base font-bold text-emerald-400">
                    ${product.price}
                  </span>
                </div>
                <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-lg transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
