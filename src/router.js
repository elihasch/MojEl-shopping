import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

<Routes>
  <Route index element={<Home />} />
  <Route path="product-detail" element={<ProductDetail />} />
</Routes>;
