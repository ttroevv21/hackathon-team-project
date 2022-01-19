import React, { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { calcTotalPrice } from "../helpers/calcPrice";

export const ClientContext = createContext();

let cart = JSON.parse(localStorage.getItem("cart"));

const INIT_STATE = {
  products: null,
  detail: null,
  productsCount: cart ? cart.products.length : 0,
  cart: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAIL":
      return { ...state, detail: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const res = await axios(`${API}${window.location.search}`);
      let action = {
        type: "GET_PRODUCTS",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetail = async (id) => {
    try {
      const res = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_DETAIL",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  //! Корзина

  function addAndDelProductInCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let cartProduct = {
      product: product,
      price: product.price,
    };

    let check = cart.products.find((item) => {
      return item.product.id === product.id;
    });

    if (!check) {
      cart.products.push(cartProduct);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.product.id !== product.id;
      });
    }
    console.log(cart);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    let check = cart.products.find((item) => {
      return item.product.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  }

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  }

  //! Pagination

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  useEffect(() => {
    if (state.products) {
      setPosts(state.products);
    }
  }, [state.products]);

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalProductsCount = posts.length;

  return (
    <ClientContext.Provider
      value={{
        getProducts: getProducts,
        getProductDetail: getProductDetail,
        addAndDelProductInCart: addAndDelProductInCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getCart: getCart,
        setCurrentPage: setCurrentPage,
        productsCount: state.productsCount,
        // products: state.products,
        products: currentPosts,
        detail: state.detail,
        cart: state.cart,
        postsPerPage: postsPerPage,
        totalProductsCount: totalProductsCount,
        currentPage: currentPage,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
