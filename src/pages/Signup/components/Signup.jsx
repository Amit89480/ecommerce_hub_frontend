import React, { useState } from "react";
import useCommon from "../../../hooks/useCommon";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { signup } = useCommon();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    fragmentedAddress: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let signUpResponse = await signup(formData);
      if (signUpResponse?.data?.responseCode === 200) {
        alert("User successfully created");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{ p: 4, width: "100%", borderRadius: 2, boxShadow: 3 }}
      >
        <Typography
          variant="h4"
          component="h1"
          mb={3}
          align="center"
          fontWeight="bold"
        >
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
            autoFocus
          />

          <TextField
            label="Mobile Number"
            name="mobile"
            type="tel"
            variant="outlined"
            fullWidth
            required
            value={formData.mobile}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            label="Address"
            name="fragmentedAddress"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            required
            value={formData.fragmentedAddress}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mb: 1 }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
