import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

export default function Home({ products }) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  // Cart & Wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredProducts(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, products]);

  return (
    <div className="container py-4">

      <h1 className="text-center mb-4 fw-bold text-dark">
        Product Showcase
      </h1>


      <SearchBar search={search} setSearch={setSearch} />

      <p className="text-muted mb-3">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-4"
              key={product.id}
            >
              <ProductCard
                product={product}
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}