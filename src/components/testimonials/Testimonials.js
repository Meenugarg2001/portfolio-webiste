import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";

//import Swiper core and required modules

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blantitiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR2,
    name: "Kwame Despite",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blantitiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR3,
    name: "Shatta Wale",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blantitiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur preasentium quibusdam, commodi velit porro blantitiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        //install swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
