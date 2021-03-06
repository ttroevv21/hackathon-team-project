import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import AdminPanel from "./pages/AdminPanel";
import AdminProvider from "./contexts/AdminProvider";
import AllFilms from "./pages/AllFilms";
import Navbar from "./components/Navbar";
import ClientProvider from "./contexts/ClientProvider";
import PaymentPage from "./pages/PaymentPage";
import AuthProvider from "./contexts/AuthProvider";

const MyRoutes = () => {
  return (
    <ClientProvider>
      <AuthProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/films" element={<AllFilms />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </AuthProvider>
    </ClientProvider>
  );
};

export default MyRoutes;
