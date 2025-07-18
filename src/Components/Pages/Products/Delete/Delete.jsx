import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  const navigate = useNavigate();
  const deleteProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
        axios.delete(`http://localhost:3000/products/${id}`);
        navigate("/Products");
      } else {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your Product is safe!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <>
      <button className="btn btn-danger p-2" onClick={deleteProduct}>
        Delete <MdDeleteOutline className="inline-block mb-1" />
      </button>
    </>
  );
};

export default Delete;
