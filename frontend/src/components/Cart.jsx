import React from "react";

export default function Cart({ cart, setcart }) {
  const removeItem = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-subtitle">
          Review items before proceeding to checkout.
        </p>
      </header>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <p>Add products from the Products page to see them here.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  {item.image && (
                    <div className="cart-item-thumb">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  )}
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ₹ {Number(item.price).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <button
                  className="btn btn-danger btn-sm cart-item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3 className="cart-summary-title">Order summary</h3>
            <div className="cart-summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>₹ {total.toLocaleString("en-IN")}</span>
            </div>
            <button className="btn btn-primary cart-checkout">
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
