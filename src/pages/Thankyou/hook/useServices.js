import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCommon from "../../../hooks/useCommon";

const useServices = () => {
  const { fetchOrderDetails } = useCommon();
  const [orderDetails, setOrderDetails] = useState({});

  let { id: orderId } = useParams();
  const getOrderDetails = async (orderId) => {
    try {
      let orderDetailsResponse = await fetchOrderDetails(orderId);
      if (orderDetailsResponse?.data?.result) {
        setOrderDetails(orderDetailsResponse?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (orderId) {
      getOrderDetails(orderId);
    }
  }, [orderId]);

  return { orderDetails };
};

export default useServices;
