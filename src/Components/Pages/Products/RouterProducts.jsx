import { Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import Show from "./Show/Show";

const RouterProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </>
  );
};

export default RouterProducts;
