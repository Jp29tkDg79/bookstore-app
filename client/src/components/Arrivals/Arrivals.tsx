import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { onClickNewTobAnchor } from "../../utils/utils";

import Stars from "../UI/Stars/Stars";

import classes from "./Arrivals.module.css";

import { booksData } from "../../data";

const Arrivals = () => {
  return (
    <section>
      <h1 className="heading">
        <span>新刊紹介</span>
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {booksData.map(({ link, img, title, stars, description }, idx) => {
          return (
            <SwiperSlide key={idx} className={classes.box}>
              <div className={classes.Image}>
                <img src={img} alt="" />
              </div>
              <div className={classes.Content}>
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => onClickNewTobAnchor(e, link)}
                >
                  <h3>{title}</h3>
                </Link>
                <p>{description ? description : "詳細なし"}</p>
                <Stars stars={stars} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Arrivals;
