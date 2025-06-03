import { useState } from "react";
import axios from "axios";

export const useAPIRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);

  const makeRequest = async (method, url, payload = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios({
        method,
        url,
        ...(method === "get" ? { params: payload } : { data: payload }),
        ...config,
      });
      setResponse(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error("API error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error, response };
};
