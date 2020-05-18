import React, { Component } from "react";
import Auth, { isValidation, isPw } from "../signIn/Auth";
import styled from "styled-components";

const pwCheckText = () => {
  return (
    <div>
      비밀번호는 대문자, 소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자
      이상 이어야 합니다
    </div>
  );
};

const repwCheckText = () => {
  return <div>먼저 입력하신 비밀번호와 일치하지 않습니다</div>;
};

class SignUp extends Component {
  state = {
    idValueLength: 0,
    pwValueLength: 0,
    rePwValueLength: 0,
    idValue: "",
    pwValue: "",
    idActive: false,
    checked: false,
    rePwOverlap: false,
  };

  onChangeId = (e) => {
    if (isValidation(e.target.value)) {
      this.setState(
        {
          idValueLength: e.target.value.length,
          idValue: e.target.value,
          idActive: true,
        },
        () => console.log("idvas ", this.state.idValue)
      );
    }
  };

  onChangePw = (e) => {
    this.setState({
      pwValueLength: e.target.value.length,
      pwValue: e.target.value,
    });
  };

  onChangeRePw = (e) => {
    if (this.state.pwValue === this.state.rePwValue) {
      this.setState({ rePwOverlap: !this.state.rePwOverlap });
    }
    this.setState(
      {
        rePwValueLength: e.target.value.length,
        rePwValue: e.target.value,
      },
      () => console.log("overlap: ", this.state.rePwVOverlap)
    );
  };

  onCheckBox = () => {
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => console.log("check!!", this.state.checked)
    );
  };

  render() {
    const {
      idValueLength,
      pwValueLength,
      rePwValueLength,
      idActive,
      rePwValue,
      idValue,
      pwValue,
      checked,
    } = this.state;
    return (
      <div className="EmailLogin">
        <EmailBox>
          <h1>이메일로 회원가입</h1>
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
                value={pwValue}
                placeholder="비밀번호 입력"
                onChange={(e) => this.onChangePw(e)}
              />
              <div>{this.state.pwValueLength > 4 ? pwCheckText() : ""}</div>
            </FormBox>
            <FormBox>
              <input
                type="password"
                value={rePwValue}
                placeholder="비밀번호 확인"
                onChange={(e) => this.onChangeRePw(e)}
              />
              <div>
                {this.state.rePwOverlap === false ? repwCheckText() : ""}
              </div>
            </FormBox>
            <Label>
              <input type="checkbox" onClick={this.onCheckBox} />
              <span class="checkmark">
                <a href="/#">이용약관,</a>
                <a href="/#">개인정보 처리방침,</a>{" "}
                <a href="/#">위치기반 서비스 이용약관</a>에<br />
                동의합니다.
              </span>

              <Text>프립은 만 14세 이상 회원만 이용 가능합니다.</Text>
            </Label>
            <LoginBtn
              idActive={idActive}
              pwValueLength={pwValueLength}
              rePwValueLength={rePwValueLength}
              checked={checked}
            >
              가입하기
            </LoginBtn>
          </form>
        </EmailBox>
      </div>
    );
  }
}

export default SignUp;

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
    text-align: left;
    margin: 40px 0px 50px;
  }
  button {
    border-style: none;
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

  div {
    color: red;
    font-size: 10px;
    text-align: left;
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
  border: none;

  background-color: ${(props) =>
    // props.idValueLength >= 3 &&
    props.pwValueLength >= 1 && props.rePwValueLength >= 1 && props.checked
      ? props.backgroundColor
      : "rgb(221, 221, 221)"};
`;

const Label = styled.div`
  font-size: 10px;
  padding: 20px 0;

  input {
    float: left;
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 0 10px 12px 0;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    display: inline-block;
  }
  a {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  font-size: 10px;
  margin-top: 14px;
  text-align: left;
`;
