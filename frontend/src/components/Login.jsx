import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem("email", email.trim());
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">
            Sign in with your email to access your cart and manage products.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Continue
          </button>
        </form>

        <p className="auth-hint">
          This demo uses email only for local login. No passwords or external
          providers are required.
        </p>
      </div>
    </div>
  );
}
