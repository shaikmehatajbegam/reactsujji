import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Milk from "./Milk";
import Order from "./Order";

import Chocolate from "./Chocolate";
import "./App.css";
import Contactus from "./Contactus";
import Dryfruits from "./Dryfruits";
import Notfound from "./Notfound";
import Login from "./Login";


function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link to="/home" className="navbar-brand">
          <i className="fa-solid fa-house me-2"></i> Home
        </Link>

        <div className="navbar-nav">
          <Link to="/veg" className="nav-link">
            <i className="fa-solid fa-leaf me-2 text-success"></i> Veg
          </Link>
          <Link to="/nonveg" className="nav-link">
            <i className="fa-solid fa-drumstick-bite me-2 text-danger"></i> Non-Veg
          </Link>
          <Link to="/milk" className="nav-link">
            <i className="fa-solid fa-mug-hot me-2 text-warning"></i> Milk
          </Link>
          <Link to="/chocolate" className="nav-link">
            <i className="fa-solid fa-cookie-bite me-2 text-warning"></i> Chocolate
          </Link>
          <Link to="/dryfruits" className="nav-link">
            <i className="fa-solid fa-seedling me-2 text-warning"></i> Dry Fruits
          </Link>

          <Link to="/cart" className="nav-link">
            <i className="fa-solid fa-shopping-cart me-2 text-primary"></i> Cart
            {totalItems > 0 && <span className="badge bg-danger ms-1">{totalItems}</span>}
          </Link>

          <Link to="/order" className="nav-link">
            <i className="fa-solid fa-receipt me-2 text-info"></i> Order
          </Link>

          

          <Link to="/contactus" className="nav-link">
            <i className="fa-solid fa-envelope me-2 text-dark"></i> ContactUs
          </Link>
        </div>

        <div className="ms-auto">
          {isAuthenticated ? (
            <>
              <span className="me-3">Welcome, {user}!</span>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">Login in</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/dryfruits" element={<Dryfruits />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
