import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import useServices from "../hook/useServices";

export default function Checkout() {
  const { cartItems, handlePlaceOrder, errors, handleChange, form } =
    useServices();

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h4" mb={4} fontWeight="bold">
        Checkout
      </Typography>

      <Grid
        container
        spacing={6}
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          minHeight: 600,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minWidth: { md: "50%" },
            maxHeight: 700,
            overflowY: "auto",
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Order Summary
            </Typography>
            <List>
              {cartItems?.result?.length === 0 && (
                <Typography>No items in cart.</Typography>
              )}
              {cartItems?.result?.map((cart) =>
                cart.inventories.map(({ inventoryId, quantity }) => (
                  <ListItem key={inventoryId._id} divider>
                    <Box
                      component="img"
                      src={inventoryId.thumbnail}
                      alt={inventoryId.title}
                      sx={{
                        width: 64,
                        height: 64,
                        objectFit: "contain",
                        borderRadius: 1,
                        mr: 2,
                      }}
                    />
                    <ListItemText
                      primary={inventoryId.title}
                      secondary={`Colors: ${inventoryId.colors.join(
                        ", "
                      )} | Sizes: ${inventoryId.sizes.join(", ")}`}
                    />
                    <Typography>
                      Qty: {quantity} x ₹
                      {inventoryId.price?.toFixed(2) || "9.99"}
                    </Typography>
                    <Typography sx={{ ml: 2, fontWeight: "bold" }}>
                      ₹
                      {(
                        (inventoryId.price ? inventoryId.price : 9.99) *
                        quantity
                      ).toFixed(2)}
                    </Typography>
                  </ListItem>
                ))
              )}
              <Divider />
              <ListItem>
                <ListItemText primary="Total" />
                <Typography fontWeight="bold">
                  ₹{cartItems?.totalAmount || 0}
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Right side - Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minWidth: { md: "50%" },
            maxHeight: 700,
            overflowY: "auto",
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Billing & Payment Information
            </Typography>

            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={form.fullName}
              onChange={handleChange("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName}
              required
            />

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              required
            />

            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              value={form.phone}
              onChange={handleChange("phone")}
              error={!!errors.phone}
              helperText={errors.phone}
              required
            />

            <TextField
              label="Address"
              fullWidth
              margin="normal"
              value={form.address}
              onChange={handleChange("address")}
              error={!!errors.address}
              helperText={errors.address}
              required
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="City"
                  fullWidth
                  margin="normal"
                  value={form.city}
                  onChange={handleChange("city")}
                  error={!!errors.city}
                  helperText={errors.city}
                  required
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="State"
                  fullWidth
                  margin="normal"
                  value={form.state}
                  onChange={handleChange("state")}
                  error={!!errors.state}
                  helperText={errors.state}
                  required
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Zip Code"
                  fullWidth
                  margin="normal"
                  value={form.zipCode}
                  onChange={handleChange("zipCode")}
                  error={!!errors.zipCode}
                  helperText={errors.zipCode}
                  required
                />
              </Grid>
            </Grid>

            <Typography variant="h6" mt={3} mb={1}>
              Payment Details
            </Typography>

            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              placeholder="1234 5678 9012 3456"
              value={form.cardNumber}
              onChange={handleChange("cardNumber")}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              inputProps={{ maxLength: 19 }}
              required
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date (MM/YY)"
                  fullWidth
                  margin="normal"
                  placeholder="MM/YY"
                  value={form.expiryDate}
                  onChange={handleChange("expiryDate")}
                  error={!!errors.expiryDate}
                  helperText={errors.expiryDate}
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  fullWidth
                  margin="normal"
                  placeholder="123"
                  value={form.cvv}
                  onChange={handleChange("cvv")}
                  error={!!errors.cvv}
                  helperText={errors.cvv}
                  inputProps={{ maxLength: 3 }}
                  required
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
