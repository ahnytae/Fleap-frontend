import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return <FooterContainer>this is footer</FooterContainer>;
  }
}

export default withRouter(Footer);

const FooterContainer = styled.div`
  height: 619.4px;
`;
