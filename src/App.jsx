import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { CircularProgress, Box } from "@mui/material";
const ProductList = lazy(() =>
  import("./pages/ProductList/components/ProductList")
);
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/components/ProductDetails")
);
const Checkout = lazy(() => import("./pages/Checkout/components/Checkout"));
const ThankYou = lazy(() => import("./pages/Thankyou/components/Thankyou"));
const Login = lazy(() => import("./pages/Login/components/Login"));
const Signup = lazy(() => import("./pages/Signup/components/Signup"));
const NotFound = lazy(() => import("./components/404"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Suspense
          fallback={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress size={50} />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/details" element={<ProductDetails />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/thankyou"
              element={
                <ProtectedRoute>
                  <ThankYou />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
