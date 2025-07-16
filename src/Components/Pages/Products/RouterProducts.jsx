import { Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import Show from "./Show/Show";
import Create from "./Create/Create";

const RouterProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </>
  );
};

export default RouterProducts;
