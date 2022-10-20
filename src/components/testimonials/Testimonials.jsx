import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Name",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sint error repudiandae alias eum sapiente dolor porro maiores atque eveniet ut tempore, assumenda magni nostrum ipsum doloribus accusantium doloremque. Saepe!",
  },
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Name",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sint error repudiandae alias eum sapiente dolor porro maiores atque eveniet ut tempore, assumenda magni nostrum ipsum doloribus accusantium doloremque. Saepe!",
  },
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Name",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sint error repudiandae alias eum sapiente dolor porro maiores atque eveniet ut tempore, assumenda magni nostrum ipsum doloribus accusantium doloremque. Saepe!",
  },
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Name",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sint error repudiandae alias eum sapiente dolor porro maiores atque eveniet ut tempore, assumenda magni nostrum ipsum doloribus accusantium doloremque. Saepe!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
