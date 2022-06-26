import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaSearch, FaHeart, FaEye } from "react-icons/fa";

import classes from "./Featured.module.css";

import { booksData } from "../../data";

const Featured = () => {
  return (
    <section>
      <h1 className="heading">
        <span>セール対象商品</span>
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }}
      >
        {booksData.map(({ title, img }, idx) => {
          return (
            <SwiperSlide key={idx} className={classes.box}>
              <div className={classes.Icons}>
                <Link to="#">
                  <FaSearch />
                </Link>
                <Link to="#">
                  <FaHeart />
                </Link>
                <Link to="#">
                  <FaEye />
                </Link>
              </div>
              <div className={classes.Image}>
                <img src={img} alt="" />
              </div>
              <div className={classes.Content}>
                <h3>{title}</h3>
                <Link to="#" className="btn">
                  カートに追加
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </Swiper>
    </section>
  );
};

export default Featured;
