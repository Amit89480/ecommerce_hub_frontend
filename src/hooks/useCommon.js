import React from "react";
import apiurl from "../config/ApiUrl";
import { useAPIRequest } from "../utils/APIRequest";

const useCommon = () => {
  const { makeRequest } = useAPIRequest();

  const getAllProducts = async (page, pageSize) => {
    try {
      let url = apiurl.productList;
      let payload = {
        page: page || 0,
        pageSize: pageSize || 10,
      };
      let response = await makeRequest("post", url, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetais = async (recordId) => {
    try {
      let url = apiurl.productDetails;
      let response = makeRequest("post", url, { recordId: recordId });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async (page, pageSize) => {
    try {
      let url = apiurl.fetchAllCart;
      let response = makeRequest("post", url, {
        page: page || 0,
        pageSize: pageSize || 10,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllProducts,
    getProductDetais,
    getCartItems,
  };
};

export default useCommon;
