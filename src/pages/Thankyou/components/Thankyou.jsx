import { Box, Typography, Button, Container } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80, mb: 2 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Thank You!
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Your order has been placed successfully. We’ll notify you when it ships.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default Thankyou;
