import React, { Component } from "react";
import styled from "styled-components";

class RightArr extends Component {
  render() {
    return (
      <Button>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E" />
      </Button>
    );
  }
}

export default RightArr;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 0px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(238, 238, 238);
  }
`;
