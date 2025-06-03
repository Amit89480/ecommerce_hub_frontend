import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCommon from "../../../hooks/useCommon";

const useServices = () => {
  const [productDetails, setProductDetails] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { getProductDetais, addToCart } = useCommon();
  const { id: productId } = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    try {
      console.log("i amdhduhudhudhuhduhud");
      let response = await getProductDetais(productId);
      if (response?.data?.result) {
        const details = response?.data?.result;
        setProductDetails(details);
        // Set default variants
        setSelectedColor(details.colors?.[0] || "");
        setSelectedSize(details.sizes?.[0] || "");
        setQuantity(1);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= productDetails.stock) {
      setQuantity(value);
    }
  };

  const buyNow = async (cartItem) => {
    try {
      let addToCartResponse = await addToCart(cartItem);
      if (addToCartResponse?.data?.responseCode === 200) {
        alert("Item added to cart successfully");
        navigate("/checkout");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    productDetails,
    selectedColor,
    selectedSize,
    quantity,
    handleColorChange,
    handleSizeChange,
    handleQuantityChange,
    buyNow,
  };
};

export default useServices;
