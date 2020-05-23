import React, { useState } from "react";
import styled from "styled-components";

//2020-05-22T10:30:00

const trans = (date) => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const transDate = new Date(date);
  const yyyy = transDate.getFullYear().toString();
  const mm = (transDate.getMonth() + 1).toString();
  const dd = transDate.getDate().toString();
  const day = days[transDate.getDay()];
  const hh = transDate.getHours();
  const m = transDate.getMinutes();

  return (
    yyyy +
    "년 " +
    (mm[1] ? mm : "0" + mm[0]) +
    "월 " +
    (dd[1] ? dd : "0" + dd[0]) +
    "일 (" +
    day +
    ") " +
    hh +
    ":" +
    (m < 10 ? m + "0" : m)
  );
};

const OptionWrap = ({
  title,
  data,
  option,
  idxChange,
  isOpen,
  idxOChange,
  notMore,
}) => {
  const [isClicked, setCliked] = useState(isOpen);

  return (
    <>
      <OptionWrapper
        onClick={() => {
          setCliked(!isClicked);
        }}
        isClicked={isClicked}
      >
        <span>{title}</span>
        <i className="xi-angle-down-min" />
      </OptionWrapper>
      {title === "일정"
        ? isClicked &&
          data.map((eachItem, idx) => (
            <HiddenOptions
              onClick={() => {
                idxChange(idx);
              }}
            >
              <p>{trans(eachItem.start_date)}</p>
              <Texts>
                0 / {eachItem.max_quantity} | 신청 마감{" "}
                {trans(eachItem.end_date).slice(7, 100)}
              </Texts>
            </HiddenOptions>
          ))
        : ""}
      {title === "기본 옵션"
        ? isClicked &&
          data.map((eachItem, idx) =>
            eachItem.option_type === "option" ? (
              <DefalutOpt onClick={() => (notMore ? "" : idxOChange(idx))}>
                <Left>
                  <span>{eachItem.title}</span>
                  <p>{eachItem.content}</p>
                </Left>
                <Right>
                  <span>{eachItem.base_price}</span>
                  <p>{eachItem.price}</p>
                </Right>
              </DefalutOpt>
            ) : (
              ""
            )
          )
        : ""}
      {title !== "기본 옵션" && title !== "일정"
        ? isClicked &&
          data.map((eachItem, idx) =>
            eachItem.option_type === "option" ? (
              <DefalutOpt>
                <Left>
                  <span>{eachItem.title}</span>
                  <p>{eachItem.content}</p>
                </Left>
                <Right>
                  <span>{eachItem.base_price}</span>
                  <p>{eachItem.price}</p>
                </Right>
              </DefalutOpt>
            ) : (
              ""
            )
          )
        : ""}
    </>
  );
};

export default OptionWrap;

const OptionWrapper = styled.div`
  width: 310px;
  height: 59px;
  padding: 0px 16px;
  color: #9b9b9b;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #9b9b9b;
  cursor: pointer;
  margin-top: -1px;
  i {
    font-size: 24px;
    color: #000000;
    transition: all 0.2s ease-in-out;
    transform: ${({ isClicked }) => (isClicked ? "rotate(180deg)" : "")};
    &:hover {
      color: #9b9b9b;
    }
  }
`;

const HiddenOptions = styled.div`
  width: 310px;
  height: 73px;
  background-color: #f9f9f9;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  border-bottom: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  p {
    font-size: 13px;
    color: #000000;
    margin-bottom: 8px;
  }
`;

const Texts = styled.div`
  font-size: 11px;
  color: #555555;
`;

const DefalutOpt = styled.div`
  width: 310px;
  height: 87px;
  background-color: #f9f9f9;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #000000;
  padding: 0px 18px;
  cursor: pointer;
`;

const Left = styled.div`
  span {
    display: block;
  }
  p {
    font-size: 11px;
    color: #555555;
  }
`;

const Right = styled.div`
  span {
    color: #bbbbbb;
    text-decoration: line-through;
    display: block;
  }
  p {
    font-weight: 600;
  }
`;
