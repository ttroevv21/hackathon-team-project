import { Button } from "@mui/material";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  function toastify() {
    toast.success("Успешно оплачено!", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 2000,
    });
  }

  return (
    <div className="payment-page">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form className="payment-form">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(event) => setExpiry(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(event) => setCvc(event.target.value)}
          onFocus={(event) => setFocus(event.target.name)}
        />
      </form>
      <Button onClick={toastify} variant="contained" color="success">
        Оплатить
      </Button>
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
