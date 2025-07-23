import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Delete from "../Delete/Delete";
import { FiEdit2 } from "react-icons/fi";

const Show = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios(
        `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-cyan-700 md:p-5 p-4 pt-5 relative">
        <div className="absolute top-0 left-0 w-full justify-between flex md:block">
          <Link
            className="btn btn-dark px-4 relative m-2 top-0"
            to={"/Products"}
          >
            <GoChevronLeft className="inline absolute left-1 top-2.5" />
            Back
          </Link>
          {id > 20 ? <Delete id={id} /> : null}
          {id > 20 ? (
            <Link
              to={`/Products/Edit/${id}`}
              className="btn btn-info p-1.5 text-white m-2"
            >
              Edit
              <FiEdit2 className="inline-block ml-2 mb-1" />
            </Link>
          ) : null}
        </div>
        <div className="flex items-center justify-center pt-2">
          <div className="bg-white max-w-6xl w-full rounded-2xl shadow-xl p-9 md:w-fit">
            <div className="flex flex-col md:flex-row  items-center gap-6">
              <img
                src={data && data.image}
                alt=""
                className="w-64 h-64 object-contain rounded-xl shadow-md"
              />
              <div className="text-gray-800">
                <h2 className="text-3xl font-bold mb-2">
                  {data && data.title}
                </h2>
                <p className="text-xl text-teal-700 font-semibold mb-4">
                  price : {data && data.price}$
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {data && data.description}
                </p>
              </div>
              <button className="btn btn-success w-full md:w-110">
                Add to Cart
                <AiOutlineShoppingCart className="mx-2 mb-1 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
