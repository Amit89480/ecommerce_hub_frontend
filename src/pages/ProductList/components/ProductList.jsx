import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Welcome to MicroShop</h1>
      <p>Product: Awesome T-Shirt</p>
      <p>Price: $19.99</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}
