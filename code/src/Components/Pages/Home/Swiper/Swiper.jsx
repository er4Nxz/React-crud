import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
              <h3 className="px-5">{item.title.substr(0, 20)}</h3>
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
