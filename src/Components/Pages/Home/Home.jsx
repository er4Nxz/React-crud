
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-cyan-700 p-3">
        <h1
          className="capitalize text-center text-white"
          style={{ fontWeight: "bold", letterSpacing: "2px" }}
        >
          wellcome to my website
        </h1>
        <p
          className="text-justify text-cyan-200 p-2 text-xl font-light leading-10 "
          dir="lrt"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          exercitationem magnam aperiam quasi dolorum repudiandae rerum numquam
          est soluta fugit odio repellendus assumenda suscipit, animi quibusdam
          corporis, molestiae eum blanditiis dignissimos! Exercitationem
          dignissimos porro iure officia, eveniet tenetur labore veniam dolorum
          dolor sapiente, deserunt quia. Non excepturi atque architecto debitis.
        </p>
        <div className="flex justify-center gap-2">
          <Link className="btn btn-outline-info" to={"/About"}>
            About
          </Link>
          <Link className="btn btn-outline-info" to={"/Products"}>
            Prducts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
