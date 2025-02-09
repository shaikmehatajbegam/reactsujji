import { configureStore, createSlice } from "@reduxjs/toolkit";

// Product Slice
const productSlice = createSlice({
    name: "products",
    initialState: {
        veg: [
            { name: "potato", price: 100, image: "potato.jpg" },
            { name: "carrot", price: 70, image: "carrot.jpg" },
            { name: "tomato", price: 200, image: "tomato.jpg" },
            { name: "beetroot", price: 180, image: "beetroot.jpg" },
            { name: "cabbage", price: 200, image: "cabbage.jpg" },
            { name: "brinjal", price: 50, image: "brinjal.jpg" },
            { name: "onion", price: 50, image: "onion.jpg" },
            { name: "mint", price: 50, image: "mint.jpg" },
            { name: "coriander", price: 50, image: "coorindar.jpg" },
            { name: "cucumber", price: 50, image: "cucumber.jpg" },
            { name: "chilli", price: 50, image: "chilli.jpg" },
            { name: "garlic", price: 50, image: "garlic.jpg" },
            { name: "ivy gourd", price: 50, image: "ivy gourd.jpg" },
            { name: "cauliflower", price: 50, image: "cauliflower.jpg" },
            
        ],
        nonveg: [
            { name: "Fish", price: 100, image: "fish.jpg" },
            { name: "Chicken", price: 70, image: "chicken.jpg" },
            { name: "Mutton", price: 200, image: "mutton.jpg" },
            { name: "Egg", price: 180, image: "egg.jpg" },
            { name: "Prawns", price: 200, image: "prawns.jpg" },
        ],
        milk: [
            { name: "Jersey", price: 20, image: "jersey.jpg" },
            { name: "CountryDelight", price: 50, image: "countrydelight.jpg" },
            { name: "Heritage", price: 60, image: "heritage.jpg" },
            { name: "Sangam", price: 80, image: "sangam.jpg" },
            { name: "Amul", price: 90, image: "amul.jpg" },
        ],
        chocolate: [
            { name: "Dairy Milk", price: 400, image: "dairymilk.jpg" },
            { name: "Kitkat", price: 200, image: "kitkat.jpg" },
            { name: "Bounty", price: 70, image: "bounty.jpg" },
            { name: "Bournville", price: 80, image: "bournville.jpg" },
            { name: "Fivestar", price: 100, image: "fivestar.jpg" },
            { name: "Hershey", price: 90, image: "hershey.jpg" },
            { name: "Luxury", price: 150, image: "luxury.jpg" },
            { name: "Perk", price: 70, image: "perk.jpg" },
            { name: "Snickers", price: 100, image: "snickers.jpg" },
        ],
        dryfruits: [
            { name: "Almond", price: 220, image: "badam.jpg" },
            { name: "Anjer", price: 250, image: "anjer.jpg" },
            { name: "Cashew", price: 400, image: "cashew.jpg" },
            { name: "Chia Seeds", price: 180, image: "chia seeds.jpg" },
            { name: "Dates", price: 200, image: "dates.jpg" },
            { name: "Flaxseeds", price: 60, image: "flaxseeds.jpg" },
            { name: "Dry Grapes", price: 90, image: "grapes.jpg" },
            { name: "Pista", price: 180, image: "pista.jpg" },
            { name: "Walnuts", price: 110, image: "walnuts.jpg" },
        ],
    },
    reducers: {},
});

// Cart Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter((item) => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter((item) => item.name !== action.payload.name);
        },
        clearCart: () => [],
    },
});

// Purchase Details Slice
const purchaseDetailsSlice = createSlice({
    name: "purchase",
    initialState: [],
    reducers: {
        purchaseItems: (state, action) => {
            state.push(action.payload);
        },
    },
});

// Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || "",
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = "";
            localStorage.removeItem("username");
        },
    },
});

// Configure Store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchase: purchaseDetailsSlice.reducer,
        auth: authSlice.reducer,
    },
});

// Export Store & Actions
export default store;
export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { purchaseItems } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;
