import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { categoryListForSlider } from "../utils/categoryListForSlider";
import { useDispatch } from "react-redux";
import { categoryActions } from "../store/category-slice";

export default function Categories() {
  const dispatch = useDispatch();
  function handleActiveCart(item) {
    dispatch(categoryActions.setActiveCat(item.name));
  }
  return (
    <div className="categories-container">
      <h2>Կատեգորիաներ</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={window.innerWidth <= 420 ? 1 : 3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {categoryListForSlider.map((item) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Link to={`/${item.name}`}>
                <div
                  className="categories-item"
                  style={{ background: `url(${item.photo})` }}
                  onClick={() => {
                    handleActiveCart(item);
                  }}
                >
                  <h2>{item.name}</h2>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
