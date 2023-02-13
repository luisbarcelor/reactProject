import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Featured from "./components/featured";
import Products from "./components/products";
import Tips from "./components/tips";

function App() {
  return (
      <Router>
          <Navbar></Navbar>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<Featured />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/operations" element={<Featured />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
      </Router>
  );
}
export default App;
