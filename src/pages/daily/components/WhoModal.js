import React, { Component } from "react";
import CloseX from "../../../images/CloseX";
import styled from "styled-components";

export default class WhoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {
        0: false,
        1: false,
        2: false,
        3: false,
      },
      labelKeys: ["혼자", "친구", "가족", "연인"],
    };
  }

  handleCheck = (idx) => {
    const { checked } = this.state;
    checked[idx]
      ? this.setState(
          {
            checked: {
              ...checked,
              [idx]: false,
            },
          },
          () => console.log(checked, idx)
        )
      : this.setState(
          {
            checked: {
              ...checked,
              [idx]: true,
            },
          },
          () => console.log(checked, idx)
        );
  };

  render() {
    const { checked, labelKeys } = this.state;
    const { closed } = this.props;

    const LabelList = labelKeys.map((label, idx) => {
      return (
        <StyledDiv idx={idx} checked={checked[idx]}>
          <span>{label}</span>
          <StyledLabel>
            <input type="checkbox" onClick={() => this.handleCheck(idx)} />
          </StyledLabel>
        </StyledDiv>
      );
    });

    return (
      <>
        <ModalOverlay onClick={closed} />
        <ModalBox>
          <ModalHeader>
            <span>누구와</span>
            <div onClick={closed}>
              <CloseX />
            </div>
          </ModalHeader>
          <ModalBody>{LabelList}</ModalBody>
          <ModalFooter>
            <button>적용하기</button>
          </ModalFooter>
        </ModalBox>
      </>
    );
  }
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 350px;
  background-color: white;
  z-index: 2;
  border-radius: 5px;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 18px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  span {
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  height: 200px;
  padding: 0 40px;
`;

const StyledLabel = styled.label`
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 0px;
  input {
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    opacity: 0;
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 13px;
  &:nth-of-type(${(props) => props.idx + 1}) {
    ${StyledLabel} {
      background-image: ${(props) =>
        props.checked
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Crect width='18' height='18' fill='%233397FF' rx='5'/%3E %3Cpath stroke='%23FFF' stroke-width='2' d='M13.485 5.828l-5.657 5.657L5 8.657'/%3E %3C/g%3E %3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Crect width='17' height='17' x='.5' y='.5' fill='none' fill-rule='nonzero' stroke='%233397FF' rx='5'/%3E %3C/svg%3E")`};
    }
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 280px;
    height: 50px;
    line-height: 13px;
    background-color: rgb(51, 151, 255);
    text-align: center;
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 20px 0px;
    border-radius: 5px;
    border: none;
  }
`;
