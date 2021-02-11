import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 35rem;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <StyledSlider {...settings}>
          <div>
            <Image src="./images/banner.jpg" alt="" />
          </div>
          <div>
            <Image src="./images/friends.png" alt="" />
          </div>
          <div>
            <Image src="./images/friends.png" alt="" />
          </div>
          <div>
            <Image src="./images/logo.png" alt="" />
          </div>
          <div>
            <Image src="./images/logo.png" alt="" />
          </div>
          <div>
            <h3>6</h3>
          </div>
        </StyledSlider>
      </Container>
    );
  }
}
