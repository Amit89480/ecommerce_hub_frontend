import React from "react";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import useServices from "../hook/useServices";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function LandingPage() {
  const {
    productDetails,
    selectedColor,
    selectedSize,
    quantity,
    handleColorChange,
    handleSizeChange,
    handleQuantityChange,
    buyNow,
  } = useServices();

  return (
    <Grid container spacing={4} padding={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={productDetails?.images?.[0]}
            alt={productDetails?.title}
            sx={{ objectFit: "contain" }}
          />
        </Card>
        <Box display="flex" gap={2} mt={2}>
          {productDetails &&
            productDetails?.images?.map((img, idx) => (
              <Card key={idx} sx={{ width: 80, cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  height="80"
                  image={img}
                  alt={`${productDetails?.title} ${idx}`}
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            ))}
        </Box>
      </Grid>

      <Grid item xs={12} md={6} container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h4" fontWeight="bold">
            {productDetails.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            {productDetails.description}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" color="primary" fontWeight="bold">
            ₹ {productDetails?.price?.toFixed(2)}
          </Typography>
        </Grid>

        <Grid item container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="color-select-label">Color</InputLabel>
              <Select
                labelId="color-select-label"
                value={selectedColor}
                label="Color"
                onChange={handleColorChange}
              >
                {productDetails &&
                  productDetails?.colors?.map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="size-select-label">Variant</InputLabel>
              <Select
                labelId="size-select-label"
                value={selectedSize}
                label="Size"
                onChange={handleSizeChange}
              >
                {productDetails?.sizes?.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" mr={2}>
              Quantity:
            </Typography>
            <IconButton
              onClick={() =>
                handleQuantityChange({ target: { value: quantity - 1 } })
              }
              disabled={quantity <= 1}
            >
              <Remove />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton
              onClick={() =>
                handleQuantityChange({ target: { value: quantity + 1 } })
              }
              disabled={quantity >= productDetails?.stock}
            >
              <Add />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" mt={1}>
            Stock available: {productDetails?.stock}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() =>
              buyNow({
                inventories: [
                  {
                    inventoryId: productDetails._id,
                    quantity: quantity,
                    variant: selectedSize,
                    color: selectedColor,
                  },
                ],
              })
            }
            disabled={productDetails?.stock === 0}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
