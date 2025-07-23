import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import axios from "axios";
import SwiperSlider from "./Swiper/Swiper";
const Home = () => {
  const [swiper, setSwiper] = useState(null);
  const fetchProducts = async () => {
    try {
      let response = await axios.get(
        "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
      );
      setSwiper(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Banner />
      <SwiperSlider swiper={swiper} />
    </>
  );
};

export default Home;
