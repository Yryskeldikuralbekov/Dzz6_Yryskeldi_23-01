import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductsPage = () => {
  const productsList = useSelector((state) => state.productsList.products);

  return (
    <div className="container">
      {productsList.map((prod) => (
        <ProductCard prod={prod} key={prod._id} />
      ))}
    </div>
  );
};

export default ProductsPage;
