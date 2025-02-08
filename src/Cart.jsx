import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, remove, purchaseItems } from "./Store"; // Make sure this is imported
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Cart() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
    // Discount states
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const finalAmount = totalPrice - discountAmount;

    // Coupon states
    const [showDiscount, setShowDiscount] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
    const couponDiscountAmount = (totalPrice * couponCodeDiscountPer) / 100;

    // Handle coupon code
    let handleCouponApply = () => {
        switch (couponCode.toUpperCase()) {
            case 'RATAN10':
                setCouponCodeDiscountPer(10);
                setShowCoupon(true);
                break;
            case 'RATAN20':
                setCouponCodeDiscountPer(20);
                setShowCoupon(true);
                break;
            case 'RATAN30':
                setCouponCodeDiscountPer(30);
                setShowCoupon(true);
                break;
            case 'RATAN40':
                setCouponCodeDiscountPer(40);
                setShowCoupon(true);
                break;
            default:
                alert("Invalid Coupon Code");
                setCouponCodeDiscountPer(0);
        }
    };

    // Handle purchase details
    let handlePurchase = () => {
        let purchaseDate = new Date().toLocaleDateString();
        let purchaseDetails = {
            date: purchaseDate,
            items: [...cart],
            totalPrice: totalPrice
        };
        dispatch(clearCart()); // Clear cart after purchase
        dispatch(purchaseItems(purchaseDetails)); // Add purchase details to history
    };

    return (
        <div className="container mt-2">
            <h2 className="text-center text-primary">🛒 Your Cart</h2>
            {cart.length > 0 ? (
                <div>
                    <div className="row">
                        {cart.map((item, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card shadow-sm mb-2">
                                    <div className="card-body text-center">
                                        {/* Item Image */}
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="img-fluid" 
                                            style={{Height: "200px",width:"100px", objectFit: "contain" }} 
                                        />

                                        <h5 className="card-title mt-3">{item.name}</h5>
                                        <p className="text-muted">₹{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        
                                        {/* Quantity Control Buttons */}
                                        <div className="d-flex justify-content-center gap-2">
                                            <button className="btn btn-warning" onClick={() => dispatch(increment(item))}>+</button>
                                            <button className="btn btn-warning" onClick={() => dispatch(decrement(item))}>-</button>
                                        </div>
                                        
                                        {/* Remove Item */}
                                        <button className="btn btn-danger mt-2" onClick={() => dispatch(remove(item))}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Price */}
                    <h4 className="text-center text-info">Total Price: ₹{totalPrice.toFixed(2)}</h4>

                    {/* Discount Buttons */}
                    <div className="text-center my-3">
                        <button className="btn btn-outline-primary m-1" onClick={() => (setDiscountPercentage(10), setShowDiscount(true))}>10%</button>
                        <button className="btn btn-outline-primary m-1" onClick={() => (setDiscountPercentage(20), setShowDiscount(true))}>20%</button>
                        <button className="btn btn-outline-primary m-1" onClick={() => (setDiscountPercentage(30), setShowDiscount(true))}>30%</button>
                        <button className="btn btn-outline-primary m-1" onClick={() => (setDiscountPercentage(40), setShowDiscount(true))}>40%</button>
                    </div>

                    {/* Show Discount Amount */}
                    {showDiscount && (
                        <div className="alert alert-info text-center">
                            <p>Discount Applied: ₹{discountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Coupon Code Input */}
                    <div className="text-center my-3">
                        <input 
                            type="text"
                            className="form-control w-50 d-inline"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter coupon code"
                        />
                        <button className="btn btn-success ms-2" onClick={handleCouponApply}>Apply Coupon</button>
                    </div>

                    {/* Show Coupon Discount */}
                    {showCoupon && (
                        <div className="alert alert-success text-center">
                            <p>Coupon Applied: {couponCode}</p>
                            <p>Discount: ₹{couponDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Final Amount */}
                    <h4 className="text-center text-success">Final Amount: ₹{(finalAmount - couponDiscountAmount).toFixed(2)}</h4>

                    {/* Complete Purchase Button */}
                    <div className="text-center mt-4">
                        <button className="btn btn-primary btn-lg" onClick={handlePurchase}>
                            ✅ Complete Purchase
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-danger fw-bold fs-4">Your cart is empty 🛒</p>
            )}
        </div>
    );
}

export default Cart;
