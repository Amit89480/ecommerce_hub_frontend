import React, { useEffect, useState } from "react";
import useCommon from "../../../hooks/useCommon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { validateCheckoutForm } from "../../../utils/Validation";

const useServices = () => {
  const { getCartItems, createOrder, clearCart } = useCommon();
  const { fetchUser } = useAuth();
  const [loading, setLoading] = useState(false);
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
      if (createOrderResponse?.data?.responseCode === 200) {
        await fetchUser();
        navigate(`/thankyou/${recordId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const validationErrors = validateCheckoutForm(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setLoading(true);
      let payload = {
        cartId: cartItems?.result?.[0]?._id,
        paymentMethod: "card",
        paymentGateway: "sbi",
        ...form,
      };
      let createOrderResponse = await createOrder(payload);
      if (createOrderResponse?.data?.result) {
        setLoading(false);
        toast.success("Order succcessfully placed");
        await removeCartItems(createOrderResponse?.data?.result?.orderId);
      } else {
        toast.error(
          createOrderResponse?.data?.message || "Something went wrong!"
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
    loading,
  };
};

export default useServices;
