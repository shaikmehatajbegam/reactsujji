import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Milk() {
  let milkItems = useSelector((state) => state.products.milk);
  let dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center text-warning">
        <i className="fa-solid fa-mug-hot text-warning me-2"></i> Welcome To Milk Items
      </h2>
      <div className="row">
        {milkItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img 
                src={item.image} // Default image if none provided
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">Price: ₹{item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="btn btn-info"
                >
                  <i className="fa-solid fa-cart-plus me-2"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milk;
