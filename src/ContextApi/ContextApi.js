import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
  });
  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  return (
    <div>
      <FormContext.Provider
        value={{
          shippingAddress,
          paymentMethod,
          setShippingAddress,
          setPaymentMethod,
        }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};

export default FormContextProvider;
