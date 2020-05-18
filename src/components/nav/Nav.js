import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

class Nav extends Component {
  state = {
    btnShow: false,
    disableWindow: false,
  };

  handleOnShow = () => {
    this.setState(
      {
        btnShow: !this.state.btnShow,
      },
      () => console.log(this.state.btnShow)
    );
  };

  handleOnWindow = () => {
    this.setState({
      disableWindow: !this.state.disableWindow,
    });
  };

  render() {
    const { btnShow, disableWindow } = this.state;

    const informationBtnItems = [
      "공지사항",
      "자주 묻는 질문",
      "단체 신청",
      "기업복지 신청",
    ];

    return (
      <Wrapper
        style={{
          backgroundColor: disableWindow === true ? "red" : " ",
        }}
      >
        <Inner>
          <ActiveWindow>
            <Link to="#">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80' height='28' viewBox='0 0 80 28'%3E %3Cdefs%3E %3Cpath id='a' d='M0 .012h20.631V5.58H0z'/%3E %3Cpath id='c' d='M.155.156h5.573v5.507H.155z'/%3E %3Cpath id='e' d='M.067.194H16.23v21.162H.067z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cg transform='translate(0 15.98)'%3E %3Cmask id='b' fill='%23fff'%3E %3Cuse xlink:href='%23a'/%3E %3C/mask%3E %3Cpath fill='%23004C9C' d='M1.68 2.38L.035 5.196c-.1.17.025.384.224.384h20.372A29.08 29.08 0 0 1 11.682.012 27.814 27.814 0 0 1 1.68 2.381' mask='url(%23b)'/%3E %3C/g%3E %3Cpath fill='%233397FF' d='M6.616 9.911L1.68 18.36c3.551-.167 6.924-1 10.002-2.369a28.89 28.89 0 0 1-5.066-6.08'/%3E %3Cpath fill='%230075F0' d='M18.027 12.083a27.765 27.765 0 0 1-6.345 3.908 29.08 29.08 0 0 0 8.95 5.567h2.483c.2 0 .324-.213.224-.384l-5.312-9.091z'/%3E %3Cpath fill='%2387C1FD' d='M6.616 9.911a28.89 28.89 0 0 0 5.066 6.08 27.765 27.765 0 0 0 6.345-3.908L11.911 1.614a.26.26 0 0 0-.448 0L6.616 9.911z'/%3E %3Cg transform='translate(55.255 .08)'%3E %3Cmask id='d' fill='%23fff'%3E %3Cuse xlink:href='%23c'/%3E %3C/mask%3E %3Cpath fill='%23004C9C' d='M5.728 2.91c0 1.52-1.247 2.753-2.786 2.753S.155 4.431.155 2.91C.155 1.389 1.403.156 2.942.156S5.728 1.39 5.728 2.91' mask='url(%23d)'/%3E %3C/g%3E %3Cpath fill='%23004C9C' d='M60.808 8.959v12.303c0 .135-.11.244-.247.244h-4.728a.246.246 0 0 1-.247-.244V7.398c0-.132.107-.24.24-.244l2.583-.064c1.649-.107 2.358.828 2.4 1.869M32.799 5.635v3.979h6.256c.138 0 .25.11.25.246v2.42c0 .916-.752 1.658-1.678 1.658h-4.828v7.349c0 .135-.11.244-.247.244h-4.845a.246.246 0 0 1-.247-.244V1.522c0-.135.11-.244.247-.244h12.576c.137 0 .247.11.247.244v2.455c0 .916-.751 1.658-1.678 1.658H32.8z'/%3E %3Cg transform='translate(63.664 6.488)'%3E %3Cmask id='f' fill='%23fff'%3E %3Cuse xlink:href='%23e'/%3E %3C/mask%3E %3Cpath fill='%23004C9C' d='M8.41 11.15c-1.545 0-2.946-1.182-2.946-3.344 0-2.163 1.4-3.345 2.947-3.345 1.663 0 2.947 1.326 2.947 3.345 0 2.047-1.284 3.344-2.947 3.344m7.82-3.344c0-4.844-3.094-7.612-6.799-7.612-1.936 0-3.708.935-4.435 2.186C4.545 1.185 3.62.727 2.484.628 2.246.607 1.918.6 1.599.6h-.173l-.197.003h-.013L1.04.606C.766.612.57.62.57.62L.454.624H.453L.446.626.304.633a.248.248 0 0 0-.237.246V21.112c0 .135.11.244.247.244H5.013c.136 0 .247-.11.247-.244v-6.357-.06l-.002-.09c-.01-.727-.085-1.06-.085-1.06h.058l.022.028.007.009c.768 1.02 2.3 1.836 4.29 1.836h-.002c3.589 0 6.682-2.74 6.682-7.612' mask='url(%23f)'/%3E %3C/g%3E %3Cpath fill='%23004C9C' d='M52.932 7.16c-.49-.258-1.064-.397-1.612-.45-1.81-.172-3.23.613-4.401 1.93-.084.094-.17.186-.29.316-.445-1.254-1.387-1.727-2.546-1.83a11.645 11.645 0 0 0-.953-.027c-.506.001-.967.018-.967.018l-.277.013a.245.245 0 0 0-.234.24v13.917c0 .134.11.244.246.244H46.612c.136 0 .247-.11.247-.244v-1.004c0-1.498-.001-4.143 0-6.536 0-1.128.548-1.935 1.617-2.327 1.189-.435 2.319-.25 3.379.418.094.06.187.122.283.188.198.137.47.065.58-.15.56-1.103 1-2.187 1.028-3.422.011-.474-.305-1.024-.814-1.293'/%3E %3C/g%3E %3C/svg%3E"
                alt=""
                style={{ width: "65px", verticalAlign: "middle" }}
              />
            </Link>
            <SearchBox>
              <form>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath d='M0 0h24v24H0z'/%3E %3Ccircle cx='11' cy='11' r='5' stroke='%233397FF' stroke-width='2'/%3E %3Cpath stroke='%233397FF' stroke-width='2' d='M15 15l3.536 3.536'/%3E %3C/g%3E %3C/svg%3E"
                  alt=""
                  style={{ marginRight: "12px" }}
                />
                <input
                  onClick={this.handleOnWindow}
                  onBlur={this.handleOnWindow}
                  type="serch"
                  placeholder="하고싶은 액티비티를 검색해 보세요"
                />
              </form>
            </SearchBox>
            <InformationBtn>
              <Link to="#">호스트 지원</Link>
              <span></span>
              <Link to="#">로그인</Link>
              <span></span>
              <Link
                to="#"
                onFocus={this.handleOnShow}
                onBlur={this.handleOnShow}
              >
                고객센터
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E"
                  alt=""
                />
                <ul style={{ display: btnShow === true ? "block" : "" }}>
                  {informationBtnItems.map((item) => {
                    return (
                      <li>
                        <Link to="#">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </Link>
            </InformationBtn>
          </ActiveWindow>
          <DisableWindow
            style={{
              display: disableWindow === true ? "block" : " ",
            }}
          >
            <div>
              <header>
                <label>인기검색어</label>
              </header>
              <liveKeyword>
                <Button>
                  <span>검색어1</span>
                </Button>
                <Button>
                  <span>검색어2</span>
                </Button>
                <Button>
                  <span>검색어3</span>
                </Button>
              </liveKeyword>
            </div>
          </DisableWindow>
        </Inner>
      </Wrapper>
    );
  }
}
export default Nav;

const NavAll = styled.div`
  position: sticky;
  top: 0px;
  z-index: 300;
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;
  /* border: 2px red solid; */
`;

const Inner = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  z-index: 300;
  box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
  padding: 15px 20px;
`;

const ActiveWindow = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 930px;
  height: 100%;
  line-height: 24px;
  margin: 0px auto;
`;

const DisableWindow = styled.div`
  display: none;
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
  height: 120px;
  z-index: 111;
  background-color: white;
  div {
    width: 650px;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    /* border: 1px red solid; */
    header {
      padding-bottom: 20px;
      label {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
`;

const liveKeyword = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px blue solid;
`;

const Button = styled.button`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  width: auto;
  height: 34px;
  line-height: normal;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  color: rgb(51, 151, 255);
  font-size: 12px;
  font-weight: 500;
  padding: 0px 16.5px;
  border-width: 1px;
  border-style: none;
  border-color: rgb(51, 151, 255);
  border-image: initial;
  border-radius: 5px;
  margin: 0px 12px 6px 0px;
  font-weight: bold;
  border: 1px #3497ff solid;
`;

const SearchBox = styled.div`
  height: 40px;
  padding: 0 30px 0 50px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  form {
    position: relative;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: rgb(242, 249, 255);
    border-radius: 20px;
    padding: 0px 12px;
    input {
      -webkit-box-flex: 1;
      flex-grow: 1;
      width: 100%;
      height: 24px;
      line-height: 14px;
      font-size: 13px;
      font-weight: 400;
      border: none;
      background-color: inherit;
    }
  }
`;

const InformationBtn = styled.div`
  position: relative;
  line-height: 14px;
  font-size: 14px;
  font-weight: 600;
  span {
    width: 1px;
    height: 10px;
    background-color: rgb(221, 221, 221);
    margin-left: 14px;
    margin-right: 14px;
    display: inline-block;
  }
  img {
    margin-left: 4px;
    width: 18px;
    height: 18px;
    vertical-align: bottom;
    transform: rotate(90deg);
  }
  ul {
    display: none;
    width: 124px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    z-index: 200;
    right: 0px;
    top: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(238, 238, 238);
    border-image: initial;
    border-radius: 5px;
    padding: 10px;
    li {
      font-size: 12px;
      font-weight: bold;
      line-height: 24px;
      margin: 3px;
    }
  }
`;
