import React, { useContext, useEffect } from "react";
import CartTable from "../components/CartTable";
import { ClientContext } from "../contexts/ClientProvider";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const { cart, getCart } = useContext(ClientContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  if (!cart) {
    return <Loading />;
  }
  if (cart.products.length === 0) {
    return <h2>Ваша корзина пуста</h2>;
  }

  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
};

export default CartPage;
