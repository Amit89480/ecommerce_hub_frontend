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
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, fetchUser } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = async () => {
    await fetchUser();
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

        {user ? (
          <>
            <IconButton
              color="inherit"
              onClick={navigateToCheckout}
              style={{ cursor: "pointer" }}
            >
              <Badge badgeContent={user?.cartCount || 0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Typography>{user?.name}</Typography>
          </>
        ) : (
          <Typography onClick={() => navigate("/login")}>Login</Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}
