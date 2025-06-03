import { useEffect, useState } from "react";
import useCommon from "../../../hooks/useCommon";

const useServices = () => {
  const [productList, setProductList] = useState([]);
  const { getAllProducts } = useCommon();

  useEffect(() => {
    const fetchFun = async () => {
      const listAllProduct = await getAllProducts(0, 30);
      setProductList(listAllProduct?.data?.rows);
    };
    fetchFun();
  }, []);
  return { productList };
};

export default useServices;
