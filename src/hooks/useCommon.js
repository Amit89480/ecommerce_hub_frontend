import apiurl from "../config/ApiUrl";
import { useAPIRequest } from "../utils/APIRequest";

const useCommon = () => {
  const { makeRequest } = useAPIRequest();

  const accountLogin = async (obj) => {
    try {
      let url = apiurl.accountLogin;
      let payload = {
        email: obj?.email,
        password: obj?.password,
      };
      let response = await makeRequest("post", url, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (userObj) => {
    try {
      let url = apiurl.signup;
      let payload = {
        ...userObj,
      };
      let response = await makeRequest("post", url, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      let url = apiurl.logout;
      let payload = {};
      let response = await makeRequest("get", url, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const profileDetails = async () => {
    try {
      let url = apiurl.profileDetails;
      let payload = {};
      let response = await makeRequest("get", url, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
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

  const addToCart = async (obj) => {
    try {
      let url = apiurl.addCart;
      let response = makeRequest("post", url, {
        ...obj,
      });
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

  const deleteItemFromCart = async (recordId) => {
    try {
      let url = apiurl.deleteCartItem;
      let response = makeRequest("post", url, {
        recordId,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      let url = apiurl.clearCart;
      let response = makeRequest("get", url, {});
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const createOrder = async (orderObj) => {
    try {
      let url = apiurl.createOrder;
      let response = makeRequest("post", url, {
        ...orderObj,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrderDetails = async (recordId) => {
    try {
      let url = apiurl.createOrder;
      let response = makeRequest("post", url, {
        recordId,
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
    deleteItemFromCart,
    profileDetails,
    accountLogin,
    logout,
    signup,
    createOrder,
    fetchOrderDetails,
    addToCart,
    clearCart,
  };
};

export default useCommon;
