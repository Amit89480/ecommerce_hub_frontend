import { Grid } from "@mui/material";
import Card from "../../../components/Card";
import useServices from "../hook/useServices";

export default function LandingPage() {
  const { productList } = useServices();
  // const navigate = useNavigate();

  const handleBuy = () => {
    console.log("I am route")
  };
  return (
    <Grid container spacing={4} padding={4}>
      {productList?.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            title={product?.title}
            brand={product?.brand}
            category={product?.category}
            thumbnail={product?.thumbnail}
            price={product?.price}
            navigate={handleBuy}
          />
        </Grid>
      ))}
    </Grid>
  );
}
