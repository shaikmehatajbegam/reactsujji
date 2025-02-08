import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Order() {
  const purchaseHistory = useSelector((state) => state.purchase);
  
  // State to store current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">
        <i className="fa-solid fa-receipt me-2"></i> Purchase History
      </h2>

      <div className="text-center mb-3">
        <i className="fa-solid fa-clock me-2"></i> <strong>Current Time:</strong> {currentTime}
      </div>

      {purchaseHistory.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          <i className="fa-solid fa-exclamation-circle me-2"></i> No Purchase History Yet!
        </div>
      ) : (
        <div className="row justify-content-center">
          {purchaseHistory.map((purchase, index) => {
            // Calculate total price dynamically based on items
            const totalPrice = purchase.items.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );

            return (
              <div key={index} className="col-md-6">
                <div className="card mb-4 shadow-lg">
                  <div className="card-header bg-success text-white">
                    <strong>
                      <i className="fa-solid fa-calendar-alt me-2"></i> Date: {purchase.date}
                    </strong>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger">
                      <i className="fa-solid fa-money-bill-wave me-2"></i>
                      Total Amount: ₹{totalPrice.toFixed(2)}
                    </h5>

                    <ul className="list-group">
                      {purchase.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <span>
                            <i className="fa-solid fa-shopping-cart me-2 text-primary"></i>{" "}
                            {item.name}
                          </span>
                          <span className="badge bg-primary rounded-pill">
                            ₹{item.price} × {item.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Order;
