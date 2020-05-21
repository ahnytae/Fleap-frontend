import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

class SignInEntryPage extends Component {
  render() {
    return (
      <MainInner>
        <MainWrapper>
          <h1>로그인</h1>
          <btnWrapper>
            <Link to="/signinpage">
              <div>이메일로 로그인</div>
            </Link>
            <div>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath fill='%23FFF' fill-rule='nonzero' d='M20.897 2H3.103C2.494 2 2 2.494 2 3.103v17.794C2 21.506 2.494 22 3.103 22h9.587v-7.734h-2.604v-3.028h2.604V9.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H17.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V22h5.104c.609 0 1.103-.494 1.103-1.103V3.103C22 2.494 21.506 2 20.897 2z'/%3E %3C/svg%3E"
                alt=""
              />
              페이스북으로 로그인
            </div>
            <div>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23000' d='M12 2.328C5.833 2.328.834 6.258.834 11.105c0 3.134 2.09 5.884 5.234 7.437-.171.588-1.1 3.783-1.136 4.034 0 0-.023.189.1.26.122.073.267.017.267.017.35-.05 4.073-2.656 4.718-3.109.643.091 1.306.138 1.983.138 6.167 0 11.166-3.93 11.166-8.777 0-4.848-4.999-8.777-11.166-8.777'/%3E %3Cpath fill='%23FFE812' d='M5.747 14.387a.63.63 0 0 1-.63-.626V9.865h-.985a.632.632 0 0 1-.618-.642c0-.354.277-.642.618-.642h3.23c.34 0 .618.288.618.642a.632.632 0 0 1-.619.642h-.984v3.896a.63.63 0 0 1-.63.626M10.18 12.082l-.637-1.863-.635 1.863h1.271zm1.179 2.305c-.266 0-.469-.111-.53-.29l-.315-.851H8.573l-.315.851c-.061.179-.264.29-.53.29a.946.946 0 0 1-.404-.09c-.176-.084-.344-.314-.151-.933l1.522-4.135c.108-.315.433-.639.848-.648.416.01.741.333.849.649l1.522 4.133c.193.62.025.85-.15.934a.948.948 0 0 1-.405.09zM13.031 14.387a.6.6 0 0 1-.584-.611V9.247c0-.367.28-.666.622-.666.344 0 .623.299.623.666v3.918h1.297a.6.6 0 0 1 .584.61.6.6 0 0 1-.584.612H13.03zM16.64 14.387c-.342 0-.62-.294-.62-.657V9.237c0-.362.278-.656.62-.656.34 0 .619.294.619.656v1.412l1.727-1.832a.467.467 0 0 1 .344-.146c.155 0 .31.07.426.193a.665.665 0 0 1 .182.417.53.53 0 0 1-.136.4l-1.412 1.496 1.525 2.142a.681.681 0 0 1-.122.92.59.59 0 0 1-.372.132.604.604 0 0 1-.495-.26l-1.452-2.042-.215.228v1.433c0 .363-.278.657-.62.657'/%3E %3C/g%3E %3C/svg%3E"
                alt=""
              />
              카카오톡으로 로그인
            </div>
          </btnWrapper>
          <Footer>
            <Link to="/signup">회원가입</Link>
          </Footer>
        </MainWrapper>
      </MainInner>
    );
  }
}
export default SignInEntryPage;

const MainInner = styled.div`
  display: flex;
  align-content: flex-start;
  max-width: 970px;
  width: 100%;
  min-height: 1px;
  flex-flow: column nowrap;
  margin: 0px auto;
  padding: 0px 20px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  display: flex;
  min-width: 370px;
  line-height: 13px;
  font-size: 13px;
  text-align: center;
  flex-flow: column nowrap;
  padding: 40px 40px 60px;

  h1 {
    width: 100%;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 40px 0px 60px;
  }

  div {
    border-style: none;
    margin-bottom: 10px;
    width: 100%;
    height: 50px;
    line-height: 13px;
    background-color: rgb(51, 151, 255);
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 13px;
    padding: 0px 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: relative;

    img {
      position: absolute;
      top: 25%;
      left: 15px;
    }

    &:nth-child(2) {
      background-color: #4167b2;
    }
    &:nth-child(3) {
      background-color: #fede00;
      color: #333;
    }
  }
`;

const Footer = styled.p`
  margin-top: 30px;
  font-size: 13px;
  font-weight: 500;
`;
