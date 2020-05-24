import React, { Component } from "react";
import { Link } from "react-router-dom";
// import New from "../../images/New";
// import Star from "../../images/Star";
import styled from "styled-components";

class Items extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <HotFrip>
            {this.props.categ && (
              <Uppertitle>
                <div>
                  <h2>{this.props.categ}</h2>
                  {this.props.data[0] && (
                    <span>{this.props.data[0].total}</span>
                  )}
                </div>
                <Link to="/#">전체보기</Link>
              </Uppertitle>
            )}
            <ul>
              {this.props.data.map((data) => {
                return (
                  <li>
                    <Link
                      onClick={() => {
                        this.props.goTo(data.frip_id);
                      }}
                    >
                      <LocalText>
                        <span>{data.location}</span>
                        <button></button>
                      </LocalText>
                      <Mainimg src={data.image} alt="" />
                      <SubTitle>{data.catch_phrase}</SubTitle>
                      <Title>{data.title}</Title>
                      <Prices>
                        <PriceDiv>{data.price.toLocaleString()}원</PriceDiv>
                        {data.faked_price && (
                          <FakedPrice>{data.faked_price}</FakedPrice>
                        )}
                      </Prices>
                      {data.grade && (
                        <StyledDiv>
                          {/* <Star /> */}
                          <Score>{data.grade.slice(0, 4)}</Score>
                        </StyledDiv>
                      )}
                      {data.new && (
                        <NewContainer grade={data.grade}>
                          {/* <New /> */}
                        </NewContainer>
                      )}
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
export default Items;

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
`;

const Uppertitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  line-height: 18px;
  font-size: 14px;
  div {
    display: flex;
    max-width: calc(100% - 62px);
    font-size: 18px;
    line-height: 22px;
    h2 {
      display: inline-block;
      margin-right: 8px;
      font-weight: bold;
      color: black;
      font-size: inherit;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span {
      font-weight: 300;
    }
  }
`;

const Category = styled.div`
  margin-bottom: 40px;
  ul {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 86px;
    border-radius: 50%;
    text-align: center;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
`;
const Mainimg = styled.img`
  width: 226px;
  height: 169px;
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
  li {
    margin-right: 10px;
    width: calc(25% - 7.5px);
    margin-bottom: 31px;
    text-align: left;
    position: relative;
  }
`;
const Title = styled.div`
  margin-top: 10px;
  height: auto;
  max-height: 40px;
  line-height: 20px;
  font-size: 14px;
  word-break: keep-all;
  overflow-wrap: break-word;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Prices = styled.div`
  margin-top: 14px;
`;
const PriceDiv = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 900;
  line-height: 14px;
`;

const FakedPrice = styled.div`
  display: inline-block;
  margin-left: 4px;
  color: rgb(187, 187, 187);
  font-size: 12px;
  text-decoration: line-through;
`;
const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 14px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
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
  span {
    height: 10px;
    color: white;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    margin: 2px 0px 0px 2px;
  }
`;
const SubTitle = styled.p`
  margin-top: 14px;
  font-size: 12px;
  height: 14px;
  text-overflow: ellipsis;
  line-height: 14px;
  color: rgb(155, 155, 155);
  overflow: hidden;
`;
const Score = styled.p`
  font-size: 11px;
  font-weight: 400;
  display: inline-block;
  color: rgb(155, 155, 155);
`;

const NewContainer = styled.div`
  display: inline-block;
  margin-top: 14px;
  img {
    margin-left: ${(props) => (props.grade ? "6px" : "0")};
  }
`;
