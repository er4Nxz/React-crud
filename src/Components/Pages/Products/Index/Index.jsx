import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item/Item";
const Index = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://er4nxz.github.io/data/dbCrud.json"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="flex flex-wrap flex-row gap-5 justify-center items-center p-2 bg-cyan-700">
        {products?.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Index;
