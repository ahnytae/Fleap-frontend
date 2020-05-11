import React, { Component } from "react";
import styled from "styled-components";

class Heart extends Component {
  render() {
    return (
      <Button>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill-rule='nonzero' d='M0 0h24v24H0z'/%3E %3Cpath stroke='%23FFF' d='M13.151 5.928l-.909.908-.908-.908C9.63 4.225 6.922 4.01 5.147 5.477a4.501 4.501 0 0 0-.329 6.662l7.07 7.071a.5.5 0 0 0 .708 0l7.07-7.07a4.501 4.501 0 0 0-.328-6.664c-1.775-1.466-4.484-1.251-6.187.452z'/%3E %3C/g%3E %3C/svg%3E"></img>
      </Button>
    );
  }
}

export default Heart;

const Button = styled.button`
  width: 24px;
  height: 24px;
  line-height: normal;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  padding: 0px;
  border-radius: 5px;
  outline: none;
  border: none;
`;
