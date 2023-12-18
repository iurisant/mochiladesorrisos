import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: 0
        }}
      >
        <ul style={{ margin: "8px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((v, k) => (
        <div key={k} className="!flex justify-center items-center">
          {console.log(v.url)}
          <img src={v.url && v.url.includes("https://imgur.com") ?
            v.url.replace("https://imgur.com", "https://i.imgur.com").concat(".png") : v.url}
            alt={`slide-${k}`} className=" object-cover w-full h-[512px] max-w-[1920px]"
          />
        </div>
      ))}
    </Slider>
  );
}