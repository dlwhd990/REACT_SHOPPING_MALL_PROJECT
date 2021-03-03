import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./slider.module.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: 50,
        height: 50,
        right: 15,
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: 50,
        height: 50,
        left: 15,
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.image_box}>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="../../images/banner.jpg"
              alt=""
              className={styles.image}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
