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
            this.setState({
              category: res.category,
              // hotFrip: res.hotFrip,
              // hotFripSpecialSale: res.hotFripSpecialSale,
              // hotFripSuperHost: res.hotFripSuperHost,
              // hotFripHandMade: res.hotFripHandMade,
              // hotFripNewFrip: res.hotFripNewFrip,
              // hostBanner: res.hostBanner,
              loading: false,
            });
          });
      }
    );

    fetch("http://localhost:3000/data/MainData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          category: res.category,
        });
      });

    // 지금뜨는프립
    fetch("http://13.59.219.151:8000/frip?tag=hotfrip&limit=4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotFrip: res.data,
        });
      });

    // 프립특가 놓치지 마세요
    fetch("http://13.59.219.151:8000/frip?tag=sale&limit=4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotFripSpecialSale: res.data,
        });
      });

    // 5월 슈퍼호스트
    fetch("http://13.59.219.151:8000/frip?tag=superhost&limit=4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          superHost: res.data,
        });
      });

    //내손으로 만드는 재미
    fetch("http://13.59.219.151:8000/frip?tag=enjoy&limit=4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          enjoy: res.data,
        });
      });

    //신규 프립
    fetch("http://13.59.219.151:8000/frip?tag=newfrip&limit=4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          newFrip: res.data,
        });
      });
  }

  render() {
    const {
      category,
      hotFrip,
      hotFripSpecialSale,
      newFrip,
      superHost,
      enjoy,
      loading,
    } = this.state;

    return (
      <Wrapper>
        <Headers />
        {loading ? (
          <LoadingDiv>
            <div />
          </LoadingDiv>
        ) : (
          <Container>
            {/* 첫번째 슬라이드 */}
            <SliderBox>
              <MainSlider />
            </SliderBox>

            {/* 인기 카테고리 */}
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

            {/* 지금 뜨는 프립 */}
            <Items
              data={hotFrip}
              topTitle="지금 뜨는 프립"
              moreLink="/nowhotfrip"
            />

            {/* 두번째 슬라이드 */}
            <SliderBox>
              <SecondSlider />
            </SliderBox>

            {/* 프립 특가 세일 */}
            <Items
              data={hotFripSpecialSale}
              topTitle="⚡프립특가, 놓치지마세요!"
              moreLink="#"
            />

            {/* 기획전 title + 슬라이드*/}
            <HotFrip>
              <Category>
                <h2>기획전</h2>
              </Category>
            </HotFrip>
            <SliderBox>
              <ThirdSlider />
            </SliderBox>

            {/* 슈퍼호스트 */}
            <Items data={superHost} topTitle="🥇6월, 슈퍼호스트" moreLink="#" />

            {/* 내손으로 만드는 재미 */}
            <Items
              data={enjoy}
              topTitle="내 손으로 만드는 재미 🙌"
              moreLink="#"
            />

            {/* 신규프립 */}
            <Items data={newFrip} topTitle="신규프립" moreLink="#" />

            <SliderBox>
              <Link to="#">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
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
  span {
    height: 10px;
    color: white;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    margin: 2px 0px 0px 2px;
  }
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
