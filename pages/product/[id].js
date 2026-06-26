import Link from "next/link";

export default function ProductDetails({ product }) {
  return (
    <div className="container py-5">
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to Products
      </Link>

      <div className="row shadow p-4 rounded bg-white">

        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="fw-bold mb-3 text-dark">{product.title}</h2>

          <p className="text-secondary">{product.category}</p>

          <h3 className="text-success mb-3">
            ₹ {product.price}
          </h3>

          <p className="text-warning">
            ⭐ {product.rating.rate} ({product.rating.count} Reviews)
          </p>

          <hr />

          <h5 className="mt-4 text-dark">Description</h5>

          <p>{product.description}</p>
        </div>

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const { id } = context.params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}