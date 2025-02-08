import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Chocolate() {
  // Use useSelector to directly access the chocolates from the Redux store
  let chocolateItems = useSelector(state => state.products?.chocolate || []); // Handle undefined safely
  let dispatch = useDispatch();

  const perPage = 6; // Number of items per page
  const totalPages = Math.ceil(chocolateItems.length / perPage); // Calculate total pages

  const [pageNumber, setPageNumber] = useState(1); // State for the current page number

  // Calculate valid page number to avoid overflow (e.g., when there are no chocolates)
  const validPageNumber = Math.min(pageNumber, totalPages) || 1;

  // Calculate the indexes for slicing the array based on the current page
  const pageEndItemIndex = perPage * validPageNumber;
  const pageStartItemIndex = pageEndItemIndex - perPage;

  // Get the items for the current page using slice
  const currentItems = chocolateItems.slice(pageStartItemIndex, pageEndItemIndex);

  // Function to handle page change
  const handlePage = (page) => {
    page >= 1 && page <= totalPages ? setPageNumber(page) : null;
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">Welcome To Chocolate Collection 🍫</h2>

      {/* Display a message when no chocolates are available */}
      {chocolateItems.length === 0 ? (
        <p className="text-center text-danger">No chocolates available at the moment.</p>
      ) : (
        <div className="row">
          {/* Map over the currentItems to display chocolate items */}
          {currentItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                {/* Image Section */}
                <img
                  src={item.image}
                  className="card-img-top mx-auto mt-3"
                  alt={item.name}
                  style={{ height: "120px", width: "120px", objectFit: "cover" }}
                />

                {/* Card Body */}
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted">Price: ₹{item.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-cart-plus me-2"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          {/* Previous button */}
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => handlePage(pageNumber - 1)}
            disabled={pageNumber === 1}
          >
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>

          {/* Page number buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePage(index + 1)}
              className={`btn ${pageNumber === index + 1 ? "btn-primary" : "btn-outline-primary"} me-1`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            className="btn btn-outline-primary ms-2"
            onClick={() => handlePage(pageNumber + 1)}
            disabled={pageNumber === totalPages}
          >
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Chocolate;
