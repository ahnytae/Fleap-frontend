import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class OptionChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Option>
          <OptionAll>
            <OptionTop>
              <OptionName>
                <OptionInfo>선택한 날</OptionInfo>
                <OptionCloseBtn>
                  <img
                    alt=""
                    src="https://image.flaticon.com/icons/svg/1828/1828778.svg"
                  ></img>{" "}
                </OptionCloseBtn>
              </OptionName>
              <OptionFirst>참가비 1인</OptionFirst>
            </OptionTop>
          </OptionAll>
        </Option>
      </>
    );
  }
}

export default OptionChoice;

const Option = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 30px 0px 0px;
`;

const OptionAll = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  border-radius: 5px;
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
`;

const OptionTop = styled.div``;

const OptionName = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const OptionCloseBtn = styled.button`
  width: 24px;
  /* height: 24px; */
  /* line-height: 24px; */
  background-color: white;
  /* text-align: center; */
  cursor: pointer;
  /* font-size: 14px; */
  /* padding: 0px; */
  border-radius: 5px;
`;

const OptionFirst = styled.div``;

const OptionInfo = styled.div``;
