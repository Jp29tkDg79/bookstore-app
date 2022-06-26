import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "./Blogs.module.css";

import { Blogsdata } from "../../data";

const Blogs = () => {
  return (
    <section>
      <h1 className="heading">
        <span>ブログ</span>
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
      >
        {Blogsdata.map(({ img, title, dec }, idx) => {
          return (
            <SwiperSlide key={idx} className={classes.box}>
              <div className={classes.Image}>
                <img src={img} alt="blog画像" />
              </div>
              <div className={classes.Content}>
                <h3>{title}</h3>
                <p>{dec}</p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blogs;
