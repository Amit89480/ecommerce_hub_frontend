import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import useServices from "../hook/useServices";

const Thankyou = () => {
  const { orderDetails } = useServices();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  if (!orderDetails) return null;

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box textAlign="center" mb={4}>
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 80, mb: 2 }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Your order has been placed successfully.
          </Typography>
          <Typography variant="subtitle2" mt={1}>
            Order ID: <strong>{orderDetails?.orderId || "N/A"}</strong>
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="h6" gutterBottom>
            Customer Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography>
                <strong>Name:</strong> {orderDetails?.fullName || "N/A"}
              </Typography>
              <Typography>
                <strong>Email:</strong> {orderDetails?.email || "N/A"}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {orderDetails?.phoneNumber || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                <strong>Address:</strong> {orderDetails?.address || "N/A"}
              </Typography>
              <Typography>
                <strong>City:</strong> {orderDetails?.city || "N/A"}
              </Typography>
              <Typography>
                <strong>State:</strong> {orderDetails?.state || "N/A"}
              </Typography>
              <Typography>
                <strong>Zip Code:</strong> {orderDetails?.zipCode || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>

          {orderDetails?.inventoryId?.length > 0 ? (
            orderDetails?.inventoryId?.map((item, index) => (
              <Box key={item?._id || index} sx={{ mb: 2 }}>
                <Typography>
                  <strong>Item {index + 1}:</strong>
                </Typography>
                <Typography>
                  Inventory ID: {item?.inventory || "N/A"}
                </Typography>
                <Typography>Quantity: {item?.quantity || "N/A"}</Typography>
                <Typography>Variant: {item?.variant || "N/A"}</Typography>
                <Typography>Color: {item?.color || "N/A"}</Typography>
                <Typography>
                  Sizes: {item?.inventoryDetails?.sizes?.join(", ") || "N/A"}
                </Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))
          ) : (
            <Typography>No items found in the order.</Typography>
          )}

          <Typography variant="h6" fontWeight="bold" mt={2}>
            Total Amount: ₹{orderDetails?.totalAmount?.toFixed(2) || "0.00"}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box textAlign="center">
          <Typography variant="h6" color="success.main">
            We’ll notify you when your order ships. Thank you for shopping with
            us!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleContinueShopping}
            sx={{ mt: 4 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Thankyou;
