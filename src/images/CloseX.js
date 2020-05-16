import React, { Component } from "react";
import styled from "styled-components";

export default class CloseX extends Component {
  render() {
    return (
      <Button>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath d='M0 0h24v24H0z'/%3E %3Cpath stroke='%23000' stroke-width='2' d='M7.05 7.05l9.9 9.9M16.95 7.05l-9.9 9.9'/%3E %3C/g%3E %3C/svg%3E"
          alt="닫기 버튼"
        />
      </Button>
    );
  }
}

const Button = styled.button`
  width: 36px;
  height: 26px;
  padding: 1px 6px;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 0px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
