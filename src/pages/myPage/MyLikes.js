import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import NoLikes from "../../images/NoLikes";
import styled from "styled-components";

class MyLikes extends Component {
  constructor() {
    super();
    this.state = {
      myLikes: {},
      myNrg: 0,
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/myPage.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          myLikes: res.my_page,
          myNrg: res.my_page.energy.toLocaleString(),
        });
      });
  };

  render() {
    const { myLikes, myNrg } = this.state;

    return (
      <Container>
        <Header>
          <HeaderLeft>
            <ProfilePic pic={myLikes.profile_url}></ProfilePic>
            <ProfileDes>
              <Name>
                <span>{myLikes.name}</span>
                <button>설정</button>
              </Name>
              <div>#관심사 설정하러 가기</div>
              <div>카카오 연동 계정</div>
            </ProfileDes>
          </HeaderLeft>
          <HeaderRight>
            <Energy>
              <span>에너지 ></span>
              <span>{myNrg}</span>
            </Energy>
            <Coupon>
              <span>쿠폰 ></span>
              <span>0</span>
            </Coupon>
          </HeaderRight>
        </Header>
        <Main>
          <StyledNav>
            <Link to="/mylikes">좋아요</Link>
            <Link to="/myfrip">내 프립</Link>
            <Link>에너지</Link>
            <Link>쿠폰</Link>
            <Link>프로필 수정</Link>
            <Link>후기</Link>
          </StyledNav>
          <FripContainer>
            <FripHeader>
              <div>프립</div>
              <div>호스트</div>
            </FripHeader>
            <Frips>
              <NoLikes />
              <div>아직 좋아한 프립이 없어요.</div>
              <div>관심있는 프립의 하트를 눌러주세요!</div>
            </Frips>
          </FripContainer>
        </Main>
      </Container>
    );
  }
}

export default withRouter(MyLikes);

const Container = styled.div`
  width: 930px;
  height: 728.6px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 221.6px;
  padding: 55px 0;
  margin-bottom: 1px solid rgb(238, 238, 238);
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  height: 101.6px;
  margin-bottom: 10px;
`;

const ProfilePic = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 100px;
  height: 100px;
  margin-right: 30px;
  border-radius: 50%;
  background-image: ${(props) => `url("${props.pic}")`};
  background-position: center;
`;

const ProfileDes = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  line-height: 12px;
  font-size: 11px;
  width: 100%;
  margin-right: 10px;
  div:nth-of-type(2) {
    color: rgb(51, 151, 255);
    padding-right: 20px;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 16px;
  }
  div:last-of-type {
    font-size: 14px;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 20px;
  span {
    color: black;
    font-size: 32px;
    font-weight: bold;
    height: auto;
  }
  button {
    margin-left: 10px;
    width: 53px;
    height: 32px;
    color: rgb(155, 155, 155);
    font-size: 12px;
    font-weight: normal;
    padding: 8px;
    background-color: transparent;
    line-height: 13px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(238, 238, 238);
    border-image: initial;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  height: 81.6px;
  background-color: rgb(51, 151, 255);
  color: white;
  border-radius: 5px;
`;

const Energy = styled.div`
  border-right: 1px solid rgb(34, 133, 240);
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 20px;
  display: flex;
  flex-direction: column;
  span:first-of-type {
    margin-bottom: 11px;
    line-height: 11px;
    font-size: 11px;
    font-weight: 300;
  }
  span:last-of-type {
    line-height: 18px;
    font-size: 16px;
    font-weight: bold;
    overflow-x: hidden;
  }
`;

const Coupon = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 20px;
  display: flex;
  flex-direction: column;
  span:first-of-type {
    margin-bottom: 11px;
    line-height: 11px;
    font-size: 11px;
    font-weight: 300;
  }
  span:last-of-type {
    line-height: 18px;
    font-size: 16px;
    font-weight: bold;
    overflow-x: hidden;
  }
`;

const Main = styled.main`
  height: 372px;
  margin: 60px 0;
  display: flex;
`;

const StyledNav = styled.nav`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 18%;
  max-width: 130px;
  display: flex;
  flex-direction: column;
  a {
    display: block;
    color: inherit;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 38px;
  }
  a:first-of-type {
    color: rgb(51, 151, 255);
  }
`;

const FripContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
`;

const FripHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  div {
    margin-right: 60px;
    height: 100%;
  }
  div:first-of-type {
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
`;

const Frips = styled.div`
  height: 312px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  div {
    font-size: 11px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    color: rgb(155, 155, 155);
  }
  div:first-of-type {
    margin-top: 10px;
  }
`;
