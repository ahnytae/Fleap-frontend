import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer>
        <MenuTab>
          <MenuContainer>
            <a href="/">추천</a>
            <a href="/daily">일상</a>
            <a>여행</a>
          </MenuContainer>
        </MenuTab>
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);

const MenuTab = styled.div``;
const MenuContainer = styled.div``;

const HeaderContainer = styled.header`
  height: 109.6px;
  padding: 40px 0 22px;
  ${MenuTab} {
    width: 930px;
    margin: auto;
    ${MenuContainer} {
      width: 245.6px;
      display: flex;
      justify-content: space-between;
      a {
        font-size: 30px;
        text-decoration: none;
        color: inherit;
        /* font-weight: bold;
        &::after {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          background-color: rgb(51, 151, 255);
          margin: 12px auto 0px;
          border-radius: 3px;
        } */
      }
    }
  }
`;
