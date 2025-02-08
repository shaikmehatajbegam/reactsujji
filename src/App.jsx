import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Milk from "./Milk";
import Order from "./Order";
import AboutUs from "./Aboutus";
import Contactus from "./Contactus";
import "./App.css";
import { useDispatch, useSelector,  } from "react-redux";
import Notfound from "./Notfound";
import Login from "./Login";
import { logout } from "./Store";


import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome (if not included in index.html)
import Chocolate from "./Chocolate";
import Dryfruits from "./Dryfruits";





function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let { isAuthenticated, user } = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
        
         <Link to="/home" className="linkstyle"><i className="fa-solid fa-house me-2"></i> Home</Link>
        
        <Link to="/veg" className="linkstyle">
  <i className="fa-solid fa-leaf me-2 text-success"></i> Veg
</Link>
 
<Link to="/nonveg" className="linkstyle">
  <i className="fa-solid fa-drumstick-bite me-2 text-danger"></i> Non-Veg
</Link>

<Link to="/milk" className="linkstyle">
  <i className="fa-solid fa-mug-hot me-2 text-warning"></i> Milk
</Link>

<Link to="/chocolate" className="linkstyle">
  <i className="fa-solid fa-cookie-bite me-2 text-warning"></i> Chocolate
</Link>

<Link to="/dryfruits" className="linkstyle">
  <i className="fa-solid fa-seedling me-2 text-warning"></i> Dry Fruits
</Link>



<Link to="/cart" className="linkstyle">
  <i className="fa-solid fa-shopping-cart me-2 text-primary"></i> Cart
  <span className="badge bg-danger ms-1">{totalItems}</span>
</Link>

<Link to="/order" className="linkstyle">
  <i className="fa-solid fa-receipt me-2 text-info"></i> Order
</Link>

<Link to="/aboutus" className="linkstyle">
  <i className="fa-solid fa-users me-2 text-secondary"></i> AboutUs
</Link>

<Link to="/contactus" className="linkstyle">
  <i className="fa-solid fa-envelope me-2 text-dark"></i> ContactUs
</Link>



          {isAuthenticated ? (
            <>
              <span className="welcome">Welcome, {user}! </span>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="myclass">Sign in</Link>
          )}
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
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} /> 
       

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
