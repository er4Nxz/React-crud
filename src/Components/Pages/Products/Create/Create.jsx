import axios from "axios";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const createProduct = async () => {
      try {
        let response = await axios.post("http://localhost:3000/products", {
          title,
          description,
          price,
          image,
        });
        if (response.status === 201) {
          navigate("/Products");
          Swal.fire({
            title: "Create Product!",
            text: "You were able to add your product!",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error.message);
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
