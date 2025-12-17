import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../utils/api";

export default function BuyNow() {
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
      <div className="order-page">
        <div className="order-empty">
          <h2>Product not found</h2>
          <p>The item you tried to purchase is no longer available.</p>
        </div>
      </div>
    );
  }

  const p = product;

  return (
    <div className="order-page">
      <div className="order-confirmation">
        <div className="order-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="checkmark-icon"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="order-title">Order Placed!</h1>
        <p className="order-subtitle">
          Thank you for your purchase. Your order is confirmed and will be processed shortly.
        </p>

        <div className="order-summary">
          <div className="order-item">
            <img src={p.image} alt={p.name} className="order-item-image" />
            <div>
              <p className="order-item-name">{p.name}</p>
              <p className="order-item-price">
                ₹ {Number(p.price).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        <div className="order-details">
          <p>
            <span className="order-label">Order ID:</span>{" "}
            <span className="order-value">#{Math.floor(Math.random() * 1000000)}</span>
          </p>
          <p>
            <span className="order-label">Date:</span>{" "}
            <span className="order-value">{new Date().toLocaleDateString()}</span>
          </p>
          <p>
            <span className="order-label">Total:</span>{" "}
            <span className="order-value">
              ₹ {Number(p.price).toLocaleString("en-IN")}
            </span>
          </p>
        </div>

        <div className="order-actions">
          <button className="btn btn-primary order-btn">Track Order</button>
          <button className="btn btn-ghost order-btn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
