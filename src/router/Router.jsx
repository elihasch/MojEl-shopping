import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";
import PageNotFind from "../pages/PageNotFind";
import { useProducts } from "../hooks/useProducts";
import ProductsPage from "../pages/ProductsPage";
import ShopingPage from "../pages/ShopingPage";

function Router() {
  const { data: products, isFetching } = useProducts();

  return (
    <Routes>
      <Route index element={<Navigate to="products" replace />} />
      <Route
        path="products"
        element={<ProductsPage products={products} isFetching={isFetching} />}
      />
      <Route
        path="products/:id"
        element={<ProductDetailPage />}
      />
      <Route path="shoping" element={<ShopingPage />} />
      <Route path="*" element={<PageNotFind />} />
    </Routes>
  );
}

export default Router;
