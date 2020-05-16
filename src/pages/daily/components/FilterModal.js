import React, { Component } from "react";
import CloseX from "../../../images/CloseX";
import styled from "styled-components";

export default class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: {},
      checked: {
        0: false,
        1: false,
      },
      filterKeys: [
        "인기순",
        "등록일순",
        "평점순",
        "가격 높은순",
        "가격 낮은순",
      ],
      labelKeys: ["당일 사용 가능만", "슈퍼호스트만"],
    };
  }

  handleRadio = (idx) => {
    const { radio } = this.state;
    radio[idx]
      ? this.setState({ radio: { [idx]: false } }, console.log(radio, idx))
      : this.setState({ radio: { [idx]: true } }, console.log(radio, idx));
  };

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
    const { radio, checked, filterKeys, labelKeys } = this.state;
    const { closed } = this.props;

    const RadioList = filterKeys.map((filter, idx) => {
      return (
        <RadioDiv idx={idx} radio={radio[idx]}>
          <span>{filter}</span>
          <StyledLabel>
            <input type="radio" onClick={() => this.handleRadio(idx)} />
          </StyledLabel>
        </RadioDiv>
      );
    });

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
            <span>필터</span>
            <div onClick={closed}>
              <CloseX />
            </div>
          </ModalHeader>
          <ModalBody>
            <OrderDiv>정렬</OrderDiv>
            <FilterList>{RadioList}</FilterList>
            <CheckList>{LabelList}</CheckList>
            <div></div>
          </ModalBody>
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
  height: 596px;
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
  height: 446px;
  padding: 30px 40px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const FilterList = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const OrderDiv = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
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

const RadioDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 13px;
  &:nth-of-type(${(props) => props.idx + 1}) {
    ${StyledLabel} {
      background-image: ${(props) =>
        props.radio
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Crect width='18' height='18' fill='%233397FF' rx='9'/%3E %3Crect width='4' height='4' x='7' y='7' fill='%23FFF' rx='2'/%3E %3C/g%3E %3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Crect width='17' height='17' x='.5' y='.5' fill='none' fill-rule='nonzero' stroke='%233397FF' rx='8.5'/%3E %3C/svg%3E")`};
    }
  }
`;

const CheckList = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
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
  &:first-of-type {
    padding-top: 10px;
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
