import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import useServices from "../hook/useServices";

export default function SignUp() {
  const { handleSubmit, handleChange ,formData} = useServices();

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
