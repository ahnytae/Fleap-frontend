import React, { Component } from "react";
import Slider from "react-slick";
import { withRouter, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "inherit",
        color: "#ffff",
        position: "absolute",
        top: "50%",
        right: "30px",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "inherit",
        position: "absolute",
        top: "50%",
        left: "30px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

class MainSlider extends Component {
  state = {
    detail: [
      {
        image_url: [],
      },
    ],
  };

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/frip/${this.props.whichOne}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            detail: res.detail,
          },
          () => console.log("hotffff", res.detail)
        );
      });
  }

  render() {
    console.log("랜더 스테이트: ", this.state.detail);
    const { detail } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      duration: 1500,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {detail[0].image_url.map((item, idx) => {
            return <img src={item} alt="" />;
          })}

          {/* <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link>
          <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link>
          <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link>
          <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link>
          <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link>
          <Link to="#">
            <img src={detail.detail_img} alt="" />
          </Link> */}
        </Slider>
      </div>
    );
  }
}
export default MainSlider;
