import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class SecondItems extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <HotFrip>
            {/* <div>
              <h2>{this.props.Mtitle}</h2>
              <Link to="/#">전체보기</Link>
            </div> */}
            <ul>
              {Array(4)
                .fill()
                .map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{this.props.local}</span>
                          <button></button>
                        </LocalText>
                        <img src={this.props.imgSrc} alt="" />
                        <SubTitle>{this.props.subTitle}</SubTitle>
                        <p>{this.props.title}</p>
                        <p>{this.props.price}</p>
                        <img src={this.props.newLogo} alt="" />

                        <img src={this.props.star} alt="" />
                        <Score>{this.props.score}</Score>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </HotFrip>
        </Container>
      </Wrapper>
    );
  }
}
export default SecondItems;

const Wrapper = styled.div`
  img {
    border-radius: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  max-width: 970px;
  width: 100%;
  min-height: 1px;
  flex-flow: column nowrap;
  margin: 0px auto;
  padding: 0px 20px;
  img {
    width: 930px;
  }
`;

const Category = styled.div`
  margin-bottom: 40px;
  ul {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    margin-bottom: 39px;
  }
  li {
    width: 86px;
    border-radius: 50%;
    text-align: center;
  }
  p {
    margin-top: 12px;
  }
`;

const HotFrip = styled(Category)`
  button {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
    background-repeat: no-repeat;
    background-color: red;
    width: 24px;
    height: 24px;
    line-height: normal;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    padding: 0px;
    border-radius: 5px;
    border-style: none;
  }
  span {
    height: 10px;
    color: white;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    margin: 2px 0px 0px 2px;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    line-height: 18px;
    font-size: 14px;
    h2 {
      margin-bottom: 0px;
    }
  }
  li {
    margin-right: 10px;
    width: calc(25% - 7.5px);
    margin-bottom: 31px;
    text-align: left;
    position: relative;
  }
  p {
    &:nth-child(2) {
      margin-top: 14px;
      font-size: 12px;
      font-weight: bold;
      height: 14px;
      text-overflow: ellipsis;
      line-height: 14px;
      color: rgb(155, 155, 155);
    }
    &:nth-child(3) {
      margin-top: 10px;
      height: auto;
      max-height: 40px;
      line-height: 20px;
      font-size: 14px;
      word-break: keep-all;
      overflow-wrap: break-word;
      font-weight: 500;
      text-overflow: ellipsis;
    }
    &:nth-child(4) {
      margin-top: 14px;
      line-height: 14px;
      font-size: 14px;
    }
  }
  /* new 로고 */
  img:nth-child(6) {
    width: 30px;
    margin-top: 16px;
    float: left;
  }
  /* 별 이미지 */
  img:nth-child(7) {
    width: 16px;
    margin: 16px 2px 0 -30px;
    display: inline-block;
    vertical-align: bottom;
  }
`;

const LocalText = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 1;
  padding: 10px;
`;

const SubTitle = styled.p`
  margin-top: 14px;
  font-size: 12px;
  font-weight: bold;
  height: 14px;
  text-overflow: ellipsis;
  line-height: 14px;
  color: rgb(155, 155, 155);
`;

const Score = styled(SubTitle)`
  font-size: 11px;
  font-weight: 400;
  display: inline-block;
`;
