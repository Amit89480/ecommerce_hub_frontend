import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import useServices from "../hook/useServices";

export default function Login() {
  const { handleSubmit, setLoginData, loginData, error, handleSignUp } =
    useServices();

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
          Log In
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={loginData?.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            sx={{ mb: 3 }}
            autoFocus
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={loginData?.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            size="large"
            sx={{ mb: 2 }}
          >
            Log In
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            size="large"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
