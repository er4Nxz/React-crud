import { Route, Routes } from "react-router-dom";
import Index from "./Index/Index";

const RouterProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </>
  );
};

export default RouterProducts;
