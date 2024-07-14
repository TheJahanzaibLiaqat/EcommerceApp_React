import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Error from "./Pages/Error/Error";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header";
import Footor from "./Components/Footer";

function App() {

 
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footor />
      </Router>

     
    </>
  );
}

export default App;
