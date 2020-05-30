import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import MainSlider from "./MainSlider";
import SecondSlider from "./SecondSlider";
import ThirdSlider from "./ThirdSlider";
import Items from "../../components/item/Items";
import Headers from "../../components/header/Header";
import SecondItems from "../../components/item/SecondItems";

// class Main extends Component {
//   state = {
//     category: [],
//     sale: [],
//     hotFrip: [],
//     superHost: [],
//     newFrip: [],
//   };

//   // 카테고리
//   componentDidMount() {
//     fetch("http://localhost:3000/data/MainData.json")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           category: res.category,
//         });
//       });

//     // 지금뜨는프립
//     fetch("http://10.58.3.84:8080/?hotfrip=hot&limit=4")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState(
//           {
//             hotFrip: res.data,
//           },
//           () => console.log("hotfrip", this.state.hotFrip)
//         );
//       });

//     // 프립특가 놓치지 마세요
//     fetch("http://10.58.3.84:8080/?sale=True")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           sale: res.data,
//         });
//       });

//     // 5월 슈퍼호스트
//     fetch("http://10.58.3.84:8080/?superhost=True")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           superHost: res.data,
//         });
//       });

//     //신규 프립
//     fetch("http://10.58.3.84:8080/?tag=new")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState(
//           {
//             newFrip: res.data,
//           },
//           () => console.log("신규프립 ", this.state.newFrip)
//         );
//       });
//   }

//   render() {
//     const {
//       category,
//       hotFrip,
//       sale,
//       superHost,
//       newFrip,
//       hostBanner,
//     } = this.state;

//     return (
//       <Wrapper>
//         <Container>
//           <SliderBox>
//             <MainSlider />
//           </SliderBox>
//           <Category>
//             <h2>인기있는 카테고리</h2>
//             <ul>
//               {category.map((item, idx) => {
//                 return (
//                   <li key={`${item}+`}>
//                     <Link to="#">
//                       <img src={item.imgSrc} alt="" />
//                       <p>{item.name}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </Category>
//           <HotFrip>
//             <div>
//               <h2>지금 뜨는 프립</h2>
//               <Link to="#">전체보기</Link>
//             </div>
//             <ul>
//               {hotFrip.map((names, idx) => {
//                 return (
//                   <li>
//                     <Link to="#">
//                       <LocalText>
//                         <span>{names.location}</span>
//                         <button></button>
//                       </LocalText>
//                       <img src={names.image} alt="" />
//                       <SubTitle>{names.catch_phrase}</SubTitle>
//                       <p>{names.title}</p>
//                       <p>{names.price}</p>
//                       <p>{names.new}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </HotFrip>
//           <SliderBox>
//             <SecondSlider />
//           </SliderBox>
//           <HotFrip>
//             <div>
//               <h2>⚡프립특가, 놓치지마세요!</h2>
//               <a href="/#">전체보기</a>
//             </div>
//             <ul>
//               {sale.map((names, idx) => {
//                 return (
//                   <li>
//                     <Link to="#" key={"name" + idx}>
//                       <LocalText>
//                         <span>{names.location}</span>
//                         <button></button>
//                       </LocalText>
//                       <img src={names.image} alt="" />
//                       <SubTitle>{names.catch_phrase}</SubTitle>
//                       <p>{names.title}</p>
//                       <p>{names.price}</p>
//                       <p>{names.new && <h1>true</h1>}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </HotFrip>
//           <HotFrip>
//             <Category>
//               <h2>기획전</h2>
//             </Category>
//           </HotFrip>
//           <SliderBox>
//             <ThirdSlider />
//           </SliderBox>

//           <HotFrip>
//             <div>
//               <h2>이달의 슈퍼호스트 🥇</h2>
//               <Link to="/#">전체보기</Link>
//             </div>
//             <ul>
//               {superHost.map((names, idx) => {
//                 return (
//                   <li>
//                     <Link to="#">
//                       <LocalText>
//                         <span>{names.location}</span>
//                         <button></button>
//                       </LocalText>
//                       <img src={names.image} alt="" />
//                       <SubTitle>{names.catch_phrase}</SubTitle>
//                       <p>{names.title}</p>
//                       <p>{names.price}</p>
//                       <p>{names.new && <p>new</p>}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </HotFrip>
//           {/* 내손으로 만드는 재미 추가 해야함*/}
//           <HotFrip>
//             <div>
//               <h2>내 손으로 만드는 재미 🙌</h2>
//               <Link to="/#">전체보기</Link>
//             </div>
//             <ul>
//               {hotFripHandMade.map((names, idx) => {
//                 return (
//                   <li>
//                     <Link to="#">
//                       <LocalText>
//                         <span>{hotFripHandMade[idx].local}</span>
//                         <button></button>
//                       </LocalText>
//                       <img src={hotFripHandMade[idx].imgSrc} alt="" />
//                       <SubTitle>{hotFripHandMade[idx].subTitle}</SubTitle>
//                       <p>{hotFripHandMade[idx].title}</p>
//                       <p>{hotFripHandMade[idx].price}</p>
//                       <p>{hotFripHandMade[idx].newLogo}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </HotFrip>
//           <HotFrip>
//             <div>
//               <h2>신규 프립</h2>
//               <Link to="/#">전체보기</Link>
//             </div>
//             <ul>
//               {newFrip.map((names, idx) => {
//                 return (
//                   <li>
//                     <Link to="#">
//                       <LocalText>
//                         <span>{names.location}</span>
//                         <button></button>
//                       </LocalText>
//                       <img src={names.image} alt="" />
//                       <SubTitle>{names.catch_phrase}</SubTitle>
//                       <p>{names.title}</p>
//                       <p>{names.price}</p>
//                       <p>{names.new}</p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </HotFrip>
//           <SliderBox>
//             <Link to="#">
//               <img src={hostBanner} alt="" />
//             </Link>
//           </SliderBox>
//         </Container>
//       </Wrapper>
//     );
//   }
// }

// export default withRouter(Main);

// const Wrapper = styled.div`
//   img {
//     border-radius: 5px;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   align-content: flex-start;
//   max-width: 970px;
//   width: 100%;
//   min-height: 1px;
//   flex-flow: column nowrap;
//   margin: 0px auto;
//   padding: 0px 20px;

//   img {
//     width: 930px;
//   }
// `;

// const SliderBox = styled.div`
//   width: 930px;
//   margin-bottom: 40px;
//   padding-bottom: 40px;
// `;

// const Category = styled.div`
//   margin-bottom: 40px;

//   ul {
//     margin-bottom: 40px;
//     display: flex;
//     justify-content: space-between;
//   }

//   h2 {
//     margin-bottom: 39px;
//   }

//   li {
//     width: 86px;
//     border-radius: 50%;
//     text-align: center;
//   }

//   p {
//     margin-top: 12px;
//   }
// `;

// const HotFrip = styled(Category)`
//   button {
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E");
//     background-repeat: no-repeat;
//     background-color: red;
//     width: 24px;
//     height: 24px;
//     line-height: normal;
//     background-color: transparent;
//     text-align: center;
//     cursor: pointer;
//     font-size: 14px;
//     padding: 0px;
//     border-radius: 5px;
//     border-style: none;
//   }

//   span {
//     height: 10px;
//     color: white;
//     font-size: 10px;
//     font-weight: 500;
//     line-height: 10px;
//     text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
//     margin: 2px 0px 0px 2px;
//   }

//   div {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 30px;
//     line-height: 18px;
//     font-size: 14px;

//     h2 {
//       margin-bottom: 0px;
//     }
//   }

//   li {
//     margin-right: 10px;
//     width: calc(25% - 7.5px);
//     margin-bottom: 31px;
//     text-align: left;
//     position: relative;
//   }

//   p {
//     font-weight: bold;
//     &:nth-child(2) {
//       margin-top: 14px;
//       font-size: 12px;
//       height: 20px;
//       text-overflow: ellipsis;
//       line-height: 14px;
//       color: rgb(155, 155, 155);
//     }

//     &:nth-child(3) {
//       margin-top: 10px;
//       height: auto;
//       max-height: 40px;
//       line-height: 20px;
//       font-size: 14px;
//       word-break: keep-all;
//       overflow-wrap: break-word;
//       font-weight: 500;
//       text-overflow: ellipsis;
//     }

//     &:nth-child(4) {
//       margin-top: 14px;
//       line-height: 14px;
//       font-size: 14px;
//     }
//   }
// `;

// const LocalText = styled.div`
//   position: absolute;
//   left: 0px;
//   right: 0px;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   z-index: 1;
//   padding: 10px;
// `;

// const SubTitle = styled.p`
//   margin-top: 14px;
//   font-size: 12px;
//   font-weight: bold;
//   height: 14px;
//   text-overflow: ellipsis;
//   line-height: 14px;
//   color: rgb(155, 155, 155);
// `;

/****** 수정버전 ********/

class Main extends Component {
  state = {
    category: [],
    hotFrip: [],
    hotFripSpecialSale: [],
    hotFripSuperHost: [],
    hotFripHandMade: [],
    hotFripNewFrip: [],
    hostBanner: [],
    loading: false,
    sale: [],
    superHost: [],
    enjoy: [],
    newFrip: [],
  };

  // fetchTags = () => {
  //   ["hotfrip", "sale", "superhost", "enjoy", "new"].map((tag) => {
  //     return fetch(`http://10.58.5.115:8000/?tag=${tag}&limit=4`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(`첫 ${tag} 데이터 잘 나옴`, res.data);
  //         this.setState({ [`${tag}Data`]: res.data }, () => {
  //           console.log(this.state[`${tag}Data`], "first");
  //         });
  //       });
  //   });
  // };

  // 카테고리
  componentDidMount() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("http://localhost:3000/data/MainData.json", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((res) => {
            this.setState(
              {
                category: res.category,
                hotFrip: res.hotFrip,
                hotFripSpecialSale: res.hotFripSpecialSale,
                hotFripSuperHost: res.hotFripSuperHost,
                hotFripHandMade: res.hotFripHandMade,
                hotFripNewFrip: res.hotFripNewFrip,
                hostBanner: res.hostBanner,
                loading: false,
              },
              () => console.log("howBanner", res.hostBanner)
            );
          });
      }
    );
  }

  render() {
    const {
      category,
      hotFrip,
      hotFripSpecialSale,
      hotFripSuperHost,
      hotFripHandMade,
      hotFripNewFrip,
      hostBanner,
      loading,
    } = this.state;

    return (
      <Wrapper>
        {loading ? (
          <LoadingDiv>
            <div />
          </LoadingDiv>
        ) : (
          <Container>
            <SliderBox>
              <MainSlider />
            </SliderBox>
            <Category>
              <h2>인기있는 카테고리</h2>
              <ul>
                {category.map((item, idx) => {
                  return (
                    <li key={`${item}+`}>
                      <Link to="#">
                        <img src={item.imgSrc} alt="" />
                        <p>{item.name}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Category>
            <HotFrip>
              <div>
                <h2>지금 뜨는 프립</h2>
                <Link to="#">전체보기</Link>
              </div>
              <ul>
                {hotFrip.map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{hotFrip[idx].local}</span>
                          <button></button>
                        </LocalText>
                        <img src={hotFrip[idx].imgSrc} alt="" />
                        <SubTitle>{hotFrip[idx].subTitle}</SubTitle>
                        <p>{hotFrip[idx].title}</p>
                        <p>{hotFrip[idx].price}</p>
                        <p>{hotFrip[idx].newLogo}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HotFrip>
            <SliderBox>
              <SecondSlider />
            </SliderBox>
            <HotFrip>
              <div>
                <h2>⚡프립특가, 놓치지마세요!</h2>
                <a href="/#">전체보기</a>
              </div>
              <ul>
                {hotFripSpecialSale.map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{hotFripSpecialSale[idx].local}</span>
                          <button></button>
                        </LocalText>
                        <img src={hotFripSpecialSale[idx].imgSrc} alt="" />
                        <SubTitle>{hotFripSpecialSale[idx].subTitle}</SubTitle>
                        <p>{hotFripSpecialSale[idx].title}</p>
                        <p>{hotFripSpecialSale[idx].price}</p>
                        <p>{hotFripSpecialSale[idx].newLogo}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HotFrip>
            <HotFrip>
              <Category>
                <h2>기획전</h2>
              </Category>
            </HotFrip>
            <SliderBox>
              <ThirdSlider />
            </SliderBox>
            <HotFrip>
              <div>
                <h2>이달의 슈퍼호스트 🥇</h2>
                <Link to="/#">전체보기</Link>
              </div>
              <ul>
                {hotFripSuperHost.map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{hotFripSuperHost[idx].local}</span>
                          <button></button>
                        </LocalText>
                        <img src={hotFripSuperHost[idx].imgSrc} alt="" />
                        <SubTitle>{hotFripSuperHost[idx].subTitle}</SubTitle>
                        <p>{hotFripSuperHost[idx].title}</p>
                        <p>{hotFripSuperHost[idx].price}</p>
                        <p>{hotFripSuperHost[idx].newLogo}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HotFrip>
            <HotFrip>
              <div>
                <h2>내 손으로 만드는 재미 🙌</h2>
                <Link to="/#">전체보기</Link>
              </div>
              <ul>
                {hotFripHandMade.map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{hotFripHandMade[idx].local}</span>
                          <button></button>
                        </LocalText>
                        <img src={hotFripHandMade[idx].imgSrc} alt="" />
                        <SubTitle>{hotFripHandMade[idx].subTitle}</SubTitle>
                        <p>{hotFripHandMade[idx].title}</p>
                        <p>{hotFripHandMade[idx].price}</p>
                        <p>{hotFripHandMade[idx].newLogo}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HotFrip>
            <HotFrip>
              <div>
                <h2>신규 프립</h2>
                <Link to="/#">전체보기</Link>
              </div>
              <ul>
                {hotFripNewFrip.map((names, idx) => {
                  return (
                    <li>
                      <Link to="#">
                        <LocalText>
                          <span>{hotFripNewFrip[idx].local}</span>
                          <button></button>
                        </LocalText>
                        <img src={hotFripNewFrip[idx].imgSrc} alt="" />
                        <SubTitle>{hotFripNewFrip[idx].subTitle}</SubTitle>
                        <p>{hotFripNewFrip[idx].title}</p>
                        <p>{hotFripNewFrip[idx].price}</p>
                        <p>{hotFripNewFrip[idx].newLogo}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HotFrip>
            <SliderBox>
              <Link to="#">
                <img src={hostBanner} alt="" />
              </Link>
            </SliderBox>
          </Container>
        )}
      </Wrapper>
    );
  }
}
export default withRouter(Main);

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  div {
    height: 50px;
    width: 200px;
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_gray_logo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    color: black;
    position: absolute;
    left: auto;
    top: auto;
    bottom: auto;
    animation: 1s linear 0s infinite normal none running linArrow;
    @keyframes linArrow {
      0% {
        margin-top: -30px;
        opacity: 100%;
      }
      100% {
        margin-top: 30px;
        opacity: 0%;
      }
    }
  }
`;

const Wrapper = styled.div`
  img {
    border-radius: 5px;
  }
  header {
    a:first-of-type {
      font-weight: bold;
      &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background-color: rgb(51, 151, 255);
        margin: 12px auto 0px;
        border-radius: 3px;
      }
    }
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

const SliderBox = styled.div`
  width: 930px;
  margin-bottom: 40px;
  padding-bottom: 40px;
`;

const Category = styled.div`
  margin-bottom: 40px;

  ul {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    /* margin-bottom: 39px; */
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
    margin-top: 0;
  }

  h2 {
    display: inline-block;
  }
  a {
    float: right;
  }
  li {
    margin-right: 10px;
    width: calc(25% - 7.5px);
    margin-bottom: 31px;
    text-align: left;
    position: relative;
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
