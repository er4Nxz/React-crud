import axios from "axios";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import {
  MdFormatListNumbered,
  MdOutlineDescription,
  MdOutlineSubtitles,
} from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { TiPinOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Good job!",
      text: "You create a new product",
      icon: "success",
    });
    const createProduct = async () => {
      try {
        let res = await axios.post("https://685c4d07769de2bf085c58e4.mockapi.io/Product", {
          title,
          image,
          description,
          price,
          id,
        });
        navigate("/Products");
      } catch (error) {
        console.log(error);
      }
    };
    createProduct();
  };

  return (
    <>
      <div className="bg-cyan-200 pt-10 pb-10 px-0 min-h-screen">
        <h1
          className="text-3xl text-center mb-6"
          style={{ fontWeight: "bold", color: "#308090" }}
        >
          Create Product <IoCreateOutline className="inline-block mx-1 mb-2" />
        </h1>
        <div className="rounded-2xl shadow-2xl bg-cyan-900 p-6 w-[90%] max-w-lg mx-auto">
          <form
            action="#"
            method="post"
            className="flex flex-col gap-4"
            onSubmit={(e) => submitForm(e)}
          >
            <label
              className="text-cyan-200 font-semibold cursor-pointer"
              htmlFor="id"
            >
              Product Id
              <MdFormatListNumbered className="inline-block mb-1 mx-1 size-5" />
            </label>
            <input
              id="id"
              type="text"
              placeholder="Enter product title"
              className="p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
              onChange={(e) => setId(e.target.value)}
            />
            {id < 20 ? (
              <p className="text-red-500 text-sm inline-block">
                <TiPinOutline className="inline-block mx-2 text-red-500" />
                Product Id must be more than 20
              </p>
            ) : null}
            <label
              className="text-cyan-200 font-semibold cursor-pointer"
              htmlFor="title"
            >
              Product Title <MdOutlineSubtitles className="inline-block" />
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter product title"
              className="p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              className="text-cyan-200 font-semibold cursor-pointer"
              htmlFor="description"
            >
              Description
              <MdOutlineDescription className="inline-block mx-1" />
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              className="p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              rows={4}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label
              className="text-cyan-200 font-semibold cursor-pointer"
              htmlFor="price"
            >
              Price <RiPriceTag3Line className="inline-block" />
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter product price"
              className="p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
              min="0"
              step="0.1"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label
              className="text-cyan-200 font-semibold cursor-pointer"
              htmlFor="image"
            >
              Product URL image <CiImageOn className="inline-block" />
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter product title"
              className="p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-md transition-colors"
              disabled={id < 20 ? "disabled" : null}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
