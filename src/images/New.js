import React, { Component } from "react";
import styled from "styled-components";

class New extends Component {
  render() {
    return (
      <Styledimg src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='16' viewBox='0 0 30 16'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='30' height='16' fill='%233397FF' rx='5'/%3E %3Cpath fill='%23FFF' fill-rule='nonzero' d='M11.25 10.688H9.887L7.87 7.147v3.54H6.5V5h1.371l2.012 3.54V5h1.367v5.688zm4.895-2.41h-2.157v1.355h2.547v1.055h-3.918V5h3.926v1.059h-2.555v1.199h2.157v1.02zM22 8.565L22.652 5h1.36l-1.207 5.688h-1.422l-.762-3.243-.746 3.242h-1.418L17.247 5h1.362l.653 3.566L20.043 5h1.164L22 8.566z'/%3E %3C/g%3E %3C/svg%3E" />
    );
  }
}

export default New;

const Styledimg = styled.img`
  width: 30px;
  height: 16px;
`;
