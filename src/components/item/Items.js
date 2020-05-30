import React, { Component } from "react";
import { Link } from "react-router-dom";
import New from "../../images/New/New";
import Star from "../../images/Star/Star";
import styled, { css } from "styled-components";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichOne: {
        // 1: false,
        // 2: false,
        // 3: false,
        // 4: false,
      },
    };
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.data !== this.props.data) {
  //     const { whichOne } = this.state;
  //     const { data } = this.props;
  //     console.log("data잘 받아옴", data);
  //     for (let i = 0; i < data.length; i++) {
  //       console.log("like되어있나", data[i].like);
  //       data[i].like
  //         ? this.setState(
  //             {
  //               whichOne: {
  //                 ...whichOne,
  //                 [i + 1]: true,
  //               },
  //             },
  //             () => {
  //               console.log("liked ones", i, whichOne);
  //             }
  //           )
  //         : this.setState(
  //             {
  //               whichOne: {
  //                 ...whichOne,
  //                 [i + 1]: false,
  //               },
  //             },
  //             () => {
  //               console.log("liked ones", i, whichOne);
  //             }
  //           );
  //     }
  //   }
  // };

  // ifLiked = (idx) => {
  //   const { whichOne } = this.state;
  //   const { data } = this.props;
  //   data[idx].like
  //     ? this.setState(
  //         {
  //           whichOne: {
  //             ...whichOne,
  //             [idx + 1]: true,
  //           },
  //         },
  //         () => {
  //           console.log("liked ones", idx, whichOne);
  //         }
  //       )
  //     : this.setState(
  //         {
  //           whichOne: {
  //             ...whichOne,
  //             [idx + 1]: false,
  //           },
  //         },
  //         () => {
  //           console.log("liked ones", idx, whichOne);
  //         }
  //       );
  // };

  like = (idx, fripId) => {
    const { whichOne } = this.state;
    console.log(whichOne[idx]);
    whichOne[idx]
      ? this.setState(
          {
            whichOne: {
              ...whichOne,
              [idx]: false,
            },
          },
          () => {
            console.log("whichOne", whichOne);
            localStorage.getItem("token")
              ? fetch(`http://13.59.219.151:8000/user/like`, {
                  method: "POST",
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    frip_id: fripId,
                  }),
                })
              : alert("로그인 해주세요!");
          }
        )
      : this.setState(
          {
            whichOne: {
              ...whichOne,
              [idx]: true,
            },
          },
          () => {
            localStorage.getItem("token")
              ? fetch(`http://13.59.219.151:8000/user/like`, {
                  method: "POST",
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    frip_id: fripId,
                  }),
                })
              : alert("로그인 해주세요!");
          }
        );
  };

  render() {
    const { whichOne } = this.state;
    const { categ, data, goTo, like } = this.props;

    return (
      <Wrapper>
        <Container>
          <HotFrip>
            {categ === true ? (
              <Uppertitle>
                <div>
                  <h2>{categ}</h2>
                  {data[0] && <span>{data[0].total}</span>}
                </div>
                <Link to="/#">전체보기</Link>
              </Uppertitle>
            ) : (
              <Uppertitle>
                <div>
                  <h2>{this.props.topTitle}</h2>
                </div>
                <Link to={this.props.moreLink}>전체보기</Link>
              </Uppertitle>
            )}
            <ul>
              {data.map((data, idx) => {
                console.log("이게 되야돼", data.like);
                // this.ifLiked(idx);
                return (
                  <StyledLi
                    idx={idx + 1}
                    like={data.like}
                    ifLiked={whichOne[idx + 1]}
                    likePage={like}
                  >
                    <LikeButton
                      onClick={() => this.like(idx + 1, data.frip_id)}
                      like={like}
                    />
                    <Link
                      onClick={() => {
                        goTo(data.frip_id);
                      }}
                    >
                      <LocalText>
                        <span>{data.location}</span>
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
                          <Star />
                          <Score>{data.grade.slice(0, 4)}</Score>
                        </StyledDiv>
                      )}
                      {data.new && (
                        <NewContainer grade={data.grade}>
                          <New />
                        </NewContainer>
                      )}
                    </Link>
                  </StyledLi>
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
  width: 100%;
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
  /* padding: 0px 20px; */
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
  a {
    float: right;
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
  li {
    margin-right: 10px;
    margin-bottom: 31px;
    text-align: left;
    position: relative;
  }
`;

const LikeButton = styled.button`
  z-index: 100;
  position: absolute;
  top: ${(props) => (props.like ? "8px" : "10px")};
  right: ${(props) => (props.like ? "28px" : "10px")};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
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
`;

const StyledLi = styled.li`
  width: ${(props) =>
    props.likePage ? "calc(33.33% - 6.67px)" : "calc(25% - 7.5px)"};
  &:nth-of-type(${(props) => (props.idx ? props.idx : null)}) {
    ${LikeButton} {
      ${(props) => {
        if (props.ifLiked === undefined) {
          if (props.like) {
            return css`
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23F66' d='M2.757 0C2.05.002 1.373.236.88.65.308 1.136-.008 1.785 0 2.46c0 4.011.084 12.73.079 15.11-.004.145.078.283.218.371.069.04.151.061.235.06 6.892-4.721 7.195-4.721 7.56-4.721.363 0 .644 0 7.435 4.579.08 0 .16-.023.224-.064.149-.093.23-.241.218-.394.034-1.53.034-10.99.028-14.973.05-1.29-1.179-2.372-2.757-2.427H2.757z'/%3E %3C/svg%3E");
            `;
          } else if (!props.like) {
            return css`
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
            `;
          }
        } else if (props.ifLiked !== undefined) {
          if (props.like) {
            if (props.ifLiked) {
              return css`
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
              `;
            } else if (!props.ifLiked) {
              return css`
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23F66' d='M2.757 0C2.05.002 1.373.236.88.65.308 1.136-.008 1.785 0 2.46c0 4.011.084 12.73.079 15.11-.004.145.078.283.218.371.069.04.151.061.235.06 6.892-4.721 7.195-4.721 7.56-4.721.363 0 .644 0 7.435 4.579.08 0 .16-.023.224-.064.149-.093.23-.241.218-.394.034-1.53.034-10.99.028-14.973.05-1.29-1.179-2.372-2.757-2.427H2.757z'/%3E %3C/svg%3E");
              `;
            }
          } else if (!props.like) {
            if (props.ifLiked) {
              return css`
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23F66' d='M2.757 0C2.05.002 1.373.236.88.65.308 1.136-.008 1.785 0 2.46c0 4.011.084 12.73.079 15.11-.004.145.078.283.218.371.069.04.151.061.235.06 6.892-4.721 7.195-4.721 7.56-4.721.363 0 .644 0 7.435 4.579.08 0 .16-.023.224-.064.149-.093.23-.241.218-.394.034-1.53.034-10.99.028-14.973.05-1.29-1.179-2.372-2.757-2.427H2.757z'/%3E %3C/svg%3E");
              `;
            } else if (!props.ifLiked) {
              return css`
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
              `;
            }
          }
        }
      }}
    }
  }
  &:nth-of-type(${(props) => (props.likePage ? 3n : 4n)}) {
    margin-right: 0;
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
  /* justify-content: space-between; */
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
  width: 30px;
  img {
    margin-left: ${(props) => (props.grade ? "6px" : "0")};
  }
`;
