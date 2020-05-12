import React, { Component } from "react";
import styled from "styled-components";

class DoubleRArr extends Component {
  render() {
    return (
      <Button>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='40' height='40' fill='%23FFF' fill-opacity='0' fill-rule='nonzero' rx='20'/%3E %3Cg stroke='%23000' stroke-width='1.5'%3E %3Cpath d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E" />{" "}
      </Button>
    );
  }
}

export default DoubleRArr;

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
