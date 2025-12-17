import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((item) => item._id === id);
        setProduct(p || null);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="product-page">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <p>The item you are looking for does not exist or was removed.</p>
          <Link to="/products" className="btn btn-primary btn-sm">
            Go back to products
          </Link>
        </div>
      </div>
    );
  }

  const p = product;

  return (
    <div className="product-page">
      <div className="product-layout">
        <div className="product-media">
          <div className="product-main-image-wrapper">
            <img
              src={p.image}
              alt={p.name}
              className="product-main-image"
            />
          </div>
        </div>

        <div className="product-info">
          <p className="product-breadcrumb">
            <Link to="/products">Products</Link> / <span>{p.name}</span>
          </p>

          <h1 className="product-title">{p.name}</h1>

          <p className="product-price-lg">
            ₹ {Number(p.price).toLocaleString("en-IN")}
          </p>

          <p className="product-description-lg">
            {p.description || "No detailed description has been provided for this item."}
          </p>

          <div className="product-cta-row">
            <Link to={`/buynow/${p._id}`} className="btn btn-primary">
              Buy now
            </Link>
            <Link to="/products" className="btn btn-ghost">
              Back to products
            </Link>
          </div>

          <div className="product-meta">
            <p>
              <span className="product-meta-label">Product ID:</span>{" "}
              <span className="product-meta-value">{p._id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
