import { useEffect } from "react";
import "./App.css";
import useCommon from "./hooks/useCommon";
function App() {
  const { getAllProducts } = useCommon();

  useEffect(() => {
    const func = async () => {
      const response = await getAllProducts(0,10);
      console.log(response);
    };
    func();
  }, []);

  return <></>;
}

export default App;
