import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useCommon from "../../../hooks/useCommon";
const useServices = () => {
  const { accountLogin } = useCommon();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log(loginData);
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
      alert("I am logged in");
    }
    // login(loginData);
    navigate("/checkout");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return {
    handleSubmit,
    setLoginData,
    loginData,
    error,
    handleSignUp,
  };
};

export default useServices;
