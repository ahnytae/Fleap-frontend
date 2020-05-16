import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";

const slideImages = [
  "https://res.cloudinary.com/frientrip/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto,q_auto,r_0,w_930/98466_banner_1543489552616",
  "https://res.cloudinary.com/frientrip/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto,q_auto,r_0,w_930/98466_banner_1543489230799",
];

const properties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

class DetailSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/detail.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log("firstly: ", res.detail);
        this.setState(
          {
            detail: res.detail,
          },
          () => {
            console.log("secondly: ", res.detail);
          }
        );
      });
  };
  render() {
    return (
      <SlideContainer>
        <Slide {...properties}>
          <div className="each-slide">
            <MainImg>
              <img
                alt=""
                src={this.state.detail[0] && this.state.detail[0].datail_img}
              />
            </MainImg>
          </div>
          <div className="each-slide">
            <MainImg>
              <img
                alt=""
                src={this.state.detail[0] && this.state.detail[0].datail_img2}
              />
            </MainImg>
          </div>
          <div className="each-slide">
            <MainImg>
              <img
                alt=""
                src={this.state.detail[0] && this.state.detail[0].datail_img3}
              />
            </MainImg>
          </div>
        </Slide>
      </SlideContainer>
    );
  }
}

export default DetailSlider;

const SlideContainer = styled.div`
  margin-bottom: 40px;
  width: 560px;
  height: 420px;
  background-size: 560px 420px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const MainImg = styled.div`
  img {
    width: 560px;
    height: 420px;
    background-size: 560px 420px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;
