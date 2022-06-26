import { Link } from "react-router-dom";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { onClickNewTobAnchor } from "../../utils/utils";

import classes from "./Infomation.module.css";

import stand from "../../img/stand.png";

import { booksData } from "../../data";

const Infomation = () => {
  return (
    <section className={classes.Info}>
      <div className={classes.Row}>
        <div className={classes.Content}>
          <h3>upto 75% off</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eum
            nostrum modi reiciendis impedit, eius ullam labore vel nemo alias!
          </p>
          <Link to="#" className="btn">
            shop now
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 9500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={classes["Books-Slider"]}
        >
          {booksData.map(({ img, link }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => onClickNewTobAnchor(e, link)}
                >
                  <img src={img} alt="" />
                </Link>
              </SwiperSlide>
            );
          })}
          <img src={stand} alt="" className={classes.Stand} />
        </Swiper>
      </div>
    </section>
  );
};

export default Infomation;
