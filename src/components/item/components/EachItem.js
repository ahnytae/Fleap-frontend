import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "../../../images/Heart";
import styled from "styled-components";

class EachItem extends Component {
  render() {
    return (
      <EachItemContainer>
        <Link>
          <div>
            <ItemImg>
              <ImgDesc>
                <span>지역</span>
                <Heart />
              </ImgDesc>
            </ItemImg>
            <SubTitle>부제목입니다</SubTitle>
            <Title>제목입니다</Title>
            <Price>10000원</Price>
            <div>
              <img></img>
            </div>
          </div>
        </Link>
      </EachItemContainer>
    );
  }
}

export default EachItem;

const EachItemContainer = styled.div`
  width: 225px;
  height: 303.9px;
  margin-bottom: 50px;
`;

const ItemImg = styled.div`
  width: 225px;
  height: 167.9px;
  background-image: url("https://res.cloudinary.com/frientrip/image/upload/ar_75:56,c_fill,dpr_2.0,f_auto,g_auto,q_auto,w_310/1587565721153-5_bvfknn");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImgDesc = styled.div`
  height: 44px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const SubTitle = styled.div`
  margin-top: 14px;
  font-size: 12px;
  color: rgb(155, 155, 155);
  text-overflow: ellipsis;
`;
const Title = styled.div`
  margin-top: 10px;
  max-height: 40px;
  line-height: 20px;
  font-size: 14px;
  word-break: keep-all;
  font-weight: 500;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 900;
`;
