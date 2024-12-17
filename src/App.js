import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { FAQ } from "./pages/faq/faq";
import  Signup  from "./pages/signup/Signup";
import Login from "./pages/login/login";
import { OrderHistory } from "./pages/orderhistory/orderhistory";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/orderhistory" element={<OrderHistory/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
