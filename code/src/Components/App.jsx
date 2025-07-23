import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import RouterProducts from "./Pages/Products/RouterProducts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/React-crud/" element={<Home />} />
          <Route path="/React-crud/Products/*" element={<RouterProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
