import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
const SwiperSlider = ({ swiper }) => {
  return (
    <div className="md:h-[70vh] h-[80vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiper?.map((item) => {
          return (
            <SwiperSlide
              className="flex flex-col mt-10"
              style={{ backgroundColor: "white" }}
            >
              <Link
                className="px-4 py-2 rounded-4xl bg-cyan-700 text-white tracking-wider font-bold"
                to={`/React-crud/Products/${item.id}`}
              >
                {item.title.substr(0, 20)}
                <GoChevronRight className="inline-block mb-1 mx-1" />
              </Link>
              <img
                src={item.image}
                alt={item.title}
                style={{ objectFit: "contain", backgroundColor: "white" }}
                className="md:p-30 pt-1 p-14"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
