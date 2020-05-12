import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class Nav extends Component {
  render() {
    return <NavBar>this is nav</NavBar>;
  }
}

export default withRouter(Nav);

const NavBar = styled.div`
  height: 70px;
`;
