import { useEffect, useState } from "react";

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

        setProducts(data.data.data);
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
      <div className="min-h-screen bg-zinc-950 text-zinc-400 flex items-center justify-center">
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl shadow-lg">
          <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium">Loading products...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between border-b border-zinc-800/80 pb-5">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Explore Products
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Browse our latest collection
            </p>
          </div>
          <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-full font-medium">
            {products.length} Items
          </span>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const { id, brand, rating, title, description, price } = product;
            return (
              <div
                key={id}
                className="group bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-zinc-800/80 text-zinc-300 text-[11px] px-2.5 py-1 rounded-md font-medium uppercase tracking-wider">
                      {brand}
                    </span>

                    <span className="bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      ★ {rating}
                    </span>
                  </div>

                  <h2 className="font-semibold text-zinc-100 text-lg group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {title}
                  </h2>
                  <p className="text-zinc-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-medium">
                      Price
                    </span>
                    <span className="text-lg font-bold text-emerald-400">
                      ${price}
                    </span>
                  </div>
                  <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs px-4 py-2 rounded-xl transition duration-200 shadow-md hover:shadow-emerald-500/20 active:scale-95">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
