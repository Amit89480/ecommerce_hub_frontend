import React, { useEffect, useState } from "react";
import useCommon from "../../../hooks/useCommon";
import { useNavigate } from "react-router-dom";

const useServices = () => {
  const { getCartItems, createOrder, clearCart } = useCommon();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const fetchCartItems = async () => {
    try {
      let cartResponse = await getCartItems();
      if (cartResponse?.data?.result) {
        setCartItems(cartResponse?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeCartItems = async (recordId) => {
    try {
      let createOrderResponse = await clearCart();
      if (createOrderResponse?.data?.result) {
        navigate(`/thankyou/orderId=${recordId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      let payload = {
        cartId: cartItems?.result?.[0]?._id,
        paymentMethod: "card",
        paymentGateway: "sbi",
        ...form,
      };
      let createOrderResponse = await createOrder(payload);
      if (createOrderResponse?.data?.result) {
        alert("Order placed successfully!");
        await removeCartItems(createOrderResponse?._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    cartItems,
    handlePlaceOrder,
    errors,
    handleChange,
    setErrors,
    form,
    setForm,
  };
};

export default useServices;
