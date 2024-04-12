import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { list } from "../utils/list";
import ProductShape from "./UI/ProductShape";

export default function Newproducts() {
  return (
    <div className="last_added_container">
      <h2 className="last-added">Վերջին Ավելացվածները</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={window.innerWidth <= 420 ? 1 : 4}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {list.map((prod, i) => {
          if (i < 12) {
            return (
              <SwiperSlide key={Math.random()}>
                <ProductShape prod={prod} key={prod.id} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
