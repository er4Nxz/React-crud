import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { CiBadgeDollar } from "react-icons/ci";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Item = ({ item }) => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setTitle(item.title.substr(0, 10));
      setPrice(item.price);
      setDescription(item.description.substr(0, 60));
      setImage(item.image);
    }, 1200);
  }, []);
  return (
    <>
      <div className="rounded-2xl p-4 m-2 w-[300px] flex flex-col justify-between gap-3 bg-cyan-50 shadow-2xl">
        <h5 className="text-center hover:scale-130 transition duration-300 relative">
          {title ? (
            <NavLink
              to={`/Products/${item.id}`}
              style={{ textDecoration: "none", color: "#004466" }}
            >
              {title}
              <GoChevronRight className="absolute top-1 right-12" />
            </NavLink>
          ) : (
            <Skeleton baseColor="#007494" />
          )}
        </h5>
        {price ? (
          <h5 style={{ color: "#004466" }} className="text-center">
            {price}
            <CiBadgeDollar className="inline-block mx-1 mb-1 size-7" />
          </h5>
        ) : (
          <Skeleton inline width={90} baseColor="#007494" />
        )}
        <p className="text-[14px]" style={{ color: "#004466" }}>
          {description || <Skeleton baseColor="#007494" count={2} />}
        </p>
        {image ? (
          <img
            className="w-30 h-40 object-contain block mx-auto hover:scale-120 transition duration-300"
            src={image}
          />
        ) : (
          <Skeleton height={200} baseColor="#007494" />
        )}
      </div>
    </>
  );
};

export default Item;
