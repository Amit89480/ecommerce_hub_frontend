import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const product = {
  _id: "683ddc74e9af0c102b949583",
  externalId: 19,
  category: "groceries",
  colors: ["Yellow", "Gray"],
  description:
    "Fresh and tender chicken meat, suitable for various culinary preparations.",
  images: [
    "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
    "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp",
  ],
  price: 9.99,
  rating: 3.19,
  sizes: ["XL", "XXL"],
  stock: 97,
  thumbnail:
    "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
  title: "Chicken Meat",
  status: "active",
};

export default function LandingPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate =useNavigate()

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleBuyNow = () => {
   navigate("/checkout")
  };

  return (
    <Grid container spacing={4} padding={4}>
      {/* Left - Product Images */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={product.images[0]}
            alt={product.title}
            sx={{ objectFit: "contain" }}
          />
        </Card>
        <Box display="flex" gap={2} mt={2}>
          {product.images.map((img, idx) => (
            <Card key={idx} sx={{ width: 80, cursor: "pointer" }}>
              <CardMedia
                component="img"
                height="80"
                image={img}
                alt={`${product.title} ${idx}`}
                sx={{ objectFit: "contain" }}
              />
            </Card>
          ))}
        </Box>
      </Grid>

      {/* Right - Product Details */}
      <Grid item xs={12} md={6} container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h4" fontWeight="bold">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            {product.description}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" color="primary" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Typography>
        </Grid>

        {/* Variant Selectors */}
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
                {product.colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                value={selectedSize}
                label="Size"
                onChange={handleSizeChange}
              >
                {product.sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Quantity Selector */}
        <Grid item xs={6}>
          <TextField
            label="Quantity"
            type="number"
            inputProps={{ min: 1, max: product.stock }}
            value={quantity}
            onChange={handleQuantityChange}
            fullWidth
          />
          <Typography variant="caption" color="text.secondary">
            Stock available: {product.stock}
          </Typography>
        </Grid>

        {/* Buy Now Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleBuyNow}
            disabled={product.stock === 0}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
