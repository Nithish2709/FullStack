import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-kicker">Modern React Storefront by Nithish</p>
          <h1 className="home-title">
            Manage products, protect your cart, and shop with a clean interface. by Nithish
          </h1>
          <p className="home-subtitle">
            Add items, review details, and complete purchases with a minimal,
            responsive UI powered by React Router and local authentication.
          </p>

          <div className="home-actions">
            <Link to="/products" className="btn btn-primary">
              Browse products
            </Link>
            <Link to="/addproduct" className="btn btn-ghost">
              Add a new product
            </Link>
          </div>
        </div>

        <div className="home-hero-panel">
          <div className="home-stat">
            <span className="home-stat-label">Cart protection</span>
            <span className="home-stat-value">ProtectedRoute</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-label">Storage</span>
            <span className="home-stat-value">localStorage cart</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-label">API endpoint</span>
            <span className="home-stat-value">/api/Product</span>
          </div>
        </div>
      </section>
    </div>
  );
}
