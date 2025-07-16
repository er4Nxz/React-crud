import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item/Item";
import { Link, useNavigate } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

const Index = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
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
      <div className="flex flex-wrap flex-row gap-5 justify-center items-center p-2 bg-cyan-700 pt-5 relative">
        {products?.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
        <button className="btn btn-light absolute top-2 left-15 " onClick={()=>navigate("/Products/create")}>
          Add Product
          <IoAddOutline className="inline-block ml-2 mb-1" />
        </button>
      </div>
    </>
  );
};

export default Index;
