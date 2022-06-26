import { BiUserCircle } from "react-icons/bi";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Stars from "../UI/Stars/Stars";

import classes from "./Reviews.module.css";

import { Reviewsdata } from "../../data";

const Reviews = () => {
  return (
    <section className={classes.Reviews}>
      <h1 className="heading">
        <span>レビュー</span>
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={classes["Reviews-slider"]}
      >
        {Reviewsdata.map(({ img, name, dec, stars }, idx) => {
          return (
            <SwiperSlide key={idx} className={classes.box}>
              {img ? <img src={img} alt="" /> : <BiUserCircle className={classes["no-user"]} />}
              <h3>{name}</h3>
              <p>{dec}</p>
              <Stars stars={stars} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
