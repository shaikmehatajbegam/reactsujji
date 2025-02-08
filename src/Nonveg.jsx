import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Nonveg() {
  let nonvegItems = useSelector((state) => state.products.nonveg);
  let dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger">Welcome to Non-Veg Items 🍗</h2>
      <div className="row">
        {nonvegItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={item.image} // Ensure your items have an 'image' property
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }} // Responsive image
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">Price: ₹{item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="btn btn-secondary"
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nonveg;
