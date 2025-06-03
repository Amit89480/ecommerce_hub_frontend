import { Typography, Box } from "@mui/material";
export default function NotFound() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      textAlign="center"
    >
      <Typography variant="h4" fontWeight="bold" color="error">
        404 - Page Not Found
      </Typography>
    </Box>
  );
}
