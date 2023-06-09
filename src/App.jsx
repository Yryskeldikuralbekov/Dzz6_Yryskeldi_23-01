import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
