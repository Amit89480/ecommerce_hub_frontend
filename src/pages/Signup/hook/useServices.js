import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useCommon from "../../../hooks/useCommon";
import { toast } from "react-toastify";
const useServices = () => {
  const { accountLogin } = useCommon();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(loginData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!loginData.password.trim()) {
      setError("Password is required");
      return;
    }
    const loginReponse = await accountLogin(loginData);
    if (loginReponse) {
      toast.success("Successfully logged in");
    }
    // login(loginData);
    navigate("/checkout");
  };
  return {
    handleSubmit,
    setLoginData,
    loginData,
    error,
  };
};

export default useServices;
