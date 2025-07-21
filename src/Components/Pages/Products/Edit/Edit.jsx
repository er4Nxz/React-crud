import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";

const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <>{product && <Update product={product} />}</>;
};

export default Edit;
