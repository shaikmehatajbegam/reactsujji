import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Veg() {
    let vegItems = useSelector(state => state.products.veg);
    let dispatch = useDispatch();

    const perPage = 6; // Items per page
    const totalPages = Math.ceil(vegItems.length / perPage); // Total pages
    const [pageNumber, setPageNumber] = useState(1); // Current page state

    // Calculate indexes for slicing the array
    const pageEndItemIndex = perPage * pageNumber;
    const pageStartItemIndex = pageEndItemIndex - perPage;

    // Get items for the current page
    const currentItems = vegItems.slice(pageStartItemIndex, pageEndItemIndex);

    // Handle page change
    const handlePage = (page) => {
       
            setPageNumber(page);
        
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center text-success">Welcome To Veg Items 🥦</h2>
            <div className="row">
                
                {currentItems.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            {/* Image Section */}
                            <img 
                                src={item.image} 
                                className="card-img-top mx-auto mt-3" 
                                alt={item.name} 
                                style={{ height: "120px", width:'120px', objectFit: "cover" }} 
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

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-3">
                <button 
                    className="btn btn-outline-primary me-2"
                    onClick={() => handlePage(pageNumber - 1)} 
                    disabled={pageNumber === 1}
                >
                    <i className="fa-solid fa-arrow-left"></i> Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handlePage(index + 1)} 
                        className={`btn ${pageNumber === index + 1 ? "btn-primary" : "btn-outline-primary"} me-1`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button 
                    className="btn btn-outline-primary ms-2"
                    onClick={() => handlePage(pageNumber + 1)} 
                    disabled={pageNumber === totalPages}
                >
                    Next <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Veg;



























