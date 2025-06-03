import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function ProductCard({ title, brand, category, thumbnail, price, navigate }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {brand?.[0]?.toUpperCase() || "B"}
          </Avatar>
        }
        title={title}
        subheader={brand}
      />
      <CardMedia component="img" height="194" image={thumbnail} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Category: {category}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ₹{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={navigate}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
