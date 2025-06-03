import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Header({ onCartClick, onLoginClick, cartCount = 0 }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ cursor: "pointer" }}
          onClick={handleNavigate}
        >
          MyShop
        </Typography>

        <IconButton
          color="inherit"
          onClick={navigateToCheckout}
          style={{ cursor: "pointer" }}
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton
          color="inherit"
          onClick={onLoginClick}
          style={{ cursor: "pointer" }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
