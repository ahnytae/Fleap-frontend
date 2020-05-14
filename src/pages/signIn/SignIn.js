import React, { Component } from "react";
import Auth, { isEmail } from "./Auth";
import styled from "styled-components";

class SignIn extends React.Component {
  state = {
    idValueLength: 0,
    pwValueLength: 0,
    idValue: "",
    pwValue: "",
    idActive: false,
  };

  onChangeId = (e) => {
    if (isEmail(e.target.value)) {
      this.setState({
        idValueLength: e.target.value.length,
        idValue: e.target.value,
        idActive: true,
      });
    }
  };

  onChangePw = (e) => {
    this.setState(
      {
        pwValueLength: e.target.value.length,
        pwValue: e.target.value,
      },
      () => console.log("PW:", this.state.pwValue)
    );
  };

  render() {
    const { idValueLength, pwValueLength, idActive } = this.state;
    return (
      <div className="EmailLogin">
        <EmailBox>
          <h1>이메일로 로그인</h1>
          <form>
            <FormBox>
              <input
                type="id"
                placeholder="이메일로 입력"
                onChange={(e) => this.onChangeId(e)}
              />
            </FormBox>
            <FormBox>
              <input
                type="password"
                placeholder="비밀번호 입력"
                onChange={(e) => this.onChangePw(e)}
              />
            </FormBox>
            <LoginBtn
              idActive={this.state.idActive}
              pwValueLength={this.state.pwValueLength}
            >
              로그인
            </LoginBtn>
          </form>
          <ForgotPw>
            <a href="/ #">비밀번호를 잊어버렸나요?</a>
          </ForgotPw>
        </EmailBox>
      </div>
    );
  }
}

export default SignIn;

const EmailBox = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  display: flex;
  max-width: 370px;
  line-height: 13px;
  font-size: 13px;
  text-align: center;
  flex-flow: column nowrap;
  padding: 40px 40px 60px;
  margin: 0 auto;

  h1 {
    width: 100%;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 40px 0px 50px;
  }
`;

const FormBox = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-left: 0px;

  input {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    padding-right: 20px;
    border-bottom: 1px solid rgb(238, 238, 238);
    transition: border 0.2s ease 0s;
    border-style: none;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  line-height: 13px;
  background-color: rgb(51, 151, 255);
  text-align: center;
  cursor: not-allowed;
  color: white;
  font-size: 13px;
  padding: 0px 13px;
  border-radius: 5px;
  pointer-events: none;

  background-color: ${(props) =>
    props.idActive && props.pwValueLength >= 1
      ? props.backgroundColor
      : "rgb(221, 221, 221)"};
`;

const ForgotPw = styled.div`
  margin-top: 30px;
  line-height: 12px;
  color: rgb(155, 155, 155);
  font-size: 12px;
`;
