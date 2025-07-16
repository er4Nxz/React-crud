import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

const Item = ({ item }) => {
  return (
    <>
      <div className="rounded-2xl p-4 m-2 w-[300px] flex flex-col justify-between gap-3 bg-cyan-50 shadow-2xl">
        <h5 className="text-center hover:scale-130 transition duration-300 relative">
          <NavLink
            to={`/Products/${item.id}`}
            style={{ textDecoration: "none", color: "#004466" }}
          >
            {item.title.substr(0, 10)}
          </NavLink>
          <GoChevronRight className="absolute top-1 right-12" />
        </h5>
        <h5 style={{ color: "#004466" }} className="text-center">
          {item.price}$
        </h5>
        <p className="text-[14px]" style={{ color: "#004466" }}>
          {item.description.substr(0, 60)}
        </p>
        <img
          src={item.image}
          className="w-30 h-40 object-contain block mx-auto hover:scale-120 transition duration-300"
        />
      </div>
    </>
  );
};

export default Item;
