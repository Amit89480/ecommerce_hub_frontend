import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const useServices = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { accountLogin, fetchUser, user } = useAuth();

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  useEffect(() => {
    if (user) {
      navigate("/"); 
    }
  }, [user, navigate]);
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
      await fetchUser();
      navigate("/checkout");
    }
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
