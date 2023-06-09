import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../store/cartReducer";

const ProductCard = ({ prod }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const InCart = (existProd) => {
    console.log(cartProducts.includes(existProd));
    if (cartProducts.includes(existProd)) return true;
    return false;
  };

  return (
    <div className="productCard">
      <img src="" alt="" />
      <h3>{prod.name}</h3>
      <p>{prod.description}</p>

      {InCart(prod) ? (
        <button
          className="btn"
          onClick={() => {
            dispatch(deleteProduct(prod._id));
          }}
        >
          DELETE FROM CART
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            dispatch(addProduct(prod));
          }}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default ProductCard;
