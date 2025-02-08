import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { createSelector } from "@reduxjs/toolkit";

function Home() {


// Memoized selector to get all items
const selectAllItems = createSelector(
  (state) => state.products, // Input selector to get products from state
  (products) => {
    return {
      veg: products?.veg || [],               // Fallback to empty array if undefined
      nonveg: products?.nonveg || [],
      milk: products?.milk || [],
      chocolate: products?.chocolate || [],
      dryfruits: products?.dryfruits || [],
      all: [
        ...(products?.veg || []),
        ...(products?.nonveg || []),
        ...(products?.milk || []),
        ...(products?.chocolate || []),
        ...(products?.dryfruits || []),
      ], // Combine all categories into one array
    };
  }
);


  const dispatch = useDispatch();
  
  // Use memoized selector
  const allItems = useSelector(selectAllItems);

  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("all"); // Default category: Show all items

  // Filter items based on search and category
  const filteredItems = (allItems[category] || []).filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold">🏠 Welcome to Our Store 🛍</h2>

      {/* Search and Filter Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search Input */}
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="form-control w-50 border-primary"
          placeholder="🔍 Search for items..."
        />

        {/* Category Filter */}
        <select
          className="form-select w-25"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Items</option>
          <option value="veg">Veg 🥦</option>
          <option value="nonveg">Non-Veg 🍗</option>
          <option value="milk">Milk 🥛</option>
          <option value="chocolate">Chocolate 🍫</option>
          <option value="dryfruits">Dry Fruits 🌰</option>
        </select>
      </div>

      {/* Display Items */}
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg border-0 rounded-3">
                <img
                  src={item.image || "placeholder.jpg"}
                  alt={item.name}
                  className="card-img-top mx-auto mt-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="text-muted">₹{item.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-success fw-bold"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger fw-bold fs-4">No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
