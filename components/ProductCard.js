import Link from "next/link";

export default function ProductCard({
  product,
  cart,
  setCart,
  wishlist,
  setWishlist,
}) {

  const inCart = cart.some((item) => item.id === product.id);
  const inWishlist = wishlist.some((item) => item.id === product.id);

  const handleCart = () => {
    if (!inCart) {
      setCart([...cart, product]);
    }
  };

  const handleWishlist = () => {
    if (!inWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "220px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="card-title fw-bold">
          {product.title.length > 50
            ? product.title.substring(0, 50) + "..."
            : product.title}
        </h5>

        <p className="text-muted">{product.category}</p>

        <h4 className="text-success fw-bold">
          ₹ {product.price}
        </h4>

        <p className="text-warning">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>

        <div className="d-grid gap-2">

          <button
            className={`btn ${inCart ? "btn-success" : "btn-primary"}`}
            onClick={handleCart}
          >
            {inCart ? "✔ Added to Cart" : "🛒 Add to Cart"}
          </button>

          <button
            className={`btn ${inWishlist ? "btn-danger" : "btn-outline-danger"}`}
            onClick={handleWishlist}
          >
            {inWishlist ? "❤️ Wishlisted" : "🤍 Wishlist"}
          </button>

          <Link
            href={`/product/${product.id}`}
            className="btn btn-dark"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}