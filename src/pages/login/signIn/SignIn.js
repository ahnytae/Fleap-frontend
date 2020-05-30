import React, { Component } from "react";
import Auth, { isEmail } from "./Auth";
import styled from "styled-components";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    idActive: false,
  };

  onChangehandler = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        idActive: true,
      },
      () => console.log(this.state)
    );
  };

  loginHandler = (e) => {
    e.preventDefault();
    fetch("http://13.59.219.151:8000/user/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          console.log("로그인 성공");
          localStorage.setItem("token", response.token);
          this.props.history.push("/main");
        } else {
          alert("아이디 또는 비밀번호가 다릅니다.");
        }
      });
  };

  render() {
    const { email, password, idActive } = this.state;
    return (
      <div className="EmailLogin">
        <EmailBox>
          <h1>이메일로 로그인</h1>
          <form>
            <FormBox>
              <input
                name="email"
                type="id"
                placeholder="이메일로 입력"
                onChange={this.onChangehandler}
              />
            </FormBox>
            <FormBox>
              <input
                name="password"
                type="password"
                placeholder="비밀번호 입력"
                onChange={this.onChangehandler}
              />
            </FormBox>
            <LoginBtn onClick={this.loginHandler}>로그인</LoginBtn>
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
  border-style: none;

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

// rgb(51, 151, 255)

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  line-height: 13px;
  background-color: rgb(51, 151, 255);
  text-align: center;
  /* cursor: not-allowed; */
  color: white;
  font-size: 13px;
  padding: 0px 13px;
  border-radius: 5px;
  border-style: none;
  /* pointer-events: none; */

  /* background-color: ${(props) =>
    props.idActive ? props.backgroundColor : "rgb(221, 221, 221)"}; */
`;

const ForgotPw = styled.div`
  margin-top: 30px;
  line-height: 12px;
  color: rgb(155, 155, 155);
  font-size: 12px;
`;
