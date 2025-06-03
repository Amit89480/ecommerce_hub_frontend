import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCommon from "../../../hooks/useCommon";
import { toast } from "react-toastify";
const useServices = () => {
  const { signup } = useCommon();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    fragmentedAddress: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let signUpResponse = await signup(formData);
      if (signUpResponse?.data?.responseCode === 200) {
        toast.success("User successfully created");
        navigate("/login");
      } else if (signUpResponse?.data?.responseCode === 401) {
        toast.error("User already exists");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return {
    handleSubmit,
    handleChange,
    formData,
  };
};

export default useServices;
