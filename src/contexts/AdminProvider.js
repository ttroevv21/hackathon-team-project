import React, { useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const AdminContext = React.createContext();

const INIT_STATE = {
  products: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AdminProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      await axios.post(API, { ...newProduct, price: +newProduct.price });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addProduct: addProduct,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminProvider;
