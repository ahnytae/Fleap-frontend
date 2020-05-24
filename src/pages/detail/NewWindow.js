import React, { useState } from "react";
import styled from "styled-components";
function NewWindow({ data }) {
  const [nope, setNope] = useState(false);
  const [closeState, setCloseState] = useState(false);
  const [count, setCount] = useState(1);
  console.log("Hi", data.price);
  const decrease = () => {
    if (count <= 1) {
      setNope(true);
      return;
    }
    setNope(false);
    setCount(count - 1);
  };
  const increase = () => {
    if (count >= 5) {
      setNope(true);
      return;
    }
    setNope(false);
    setCount(count + 1);
    data.price = data.price * count;
  };
  const closeBtn = () => {
    setCloseState(!closeState);
  };
  return (
    <>
      <Wrapper
        style={{
          display: closeState === true ? "none" : "block",
          cursor: "pointer",
        }}
      >
        <FirstLine>
          <p>{data.title}</p>
          <img
            onClick={closeBtn}
            src="https://image.flaticon.com/icons/svg/271/271203.svg"
            alt=""
          />
        </FirstLine>
        {/* <p>참가비 (1인)</p> */}
        <LastLine>
          <span>{data.price}원</span>
          <Btn>
            <button
              onClick={decrease}
              style={{
                cursor: nope === true ? "not-allowed" : "",
              }}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Crect width='21' height='21' x='.5' y='.5' stroke='%23DDD' rx='10.5'/%3E %3Cpath stroke='%23000' stroke-linecap='square' d='M15 11H7'/%3E %3C/g%3E %3C/svg%3E"
                alt=""
              />
            </button>
            <p>{count}</p>
            <button
              style={{ cursor: nope === true ? "not-allowed" : "" }}
              onClick={increase}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Crect width='21' height='21' x='.5' y='.5' stroke='%23DDD' rx='10.5'/%3E %3Cpath stroke='%23000' stroke-linecap='square' d='M11 7v8M15 11H7'/%3E %3C/g%3E %3C/svg%3E"
                alt=""
              />
            </button>
          </Btn>
        </LastLine>
      </Wrapper>
    </>
  );
}
export default NewWindow;
const Wrapper = styled.div`
  display: block;
  width: 310px;
  height: 110px;
  padding: 20px;
  font-size: 12px;
  img {
    width: 14px;
    float: right;
  }
  p {
    display: inline-block;
  }
`;
const FirstLine = styled.div`
  margin-bottom: 12px;
`;
const LastLine = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #3497ff;
  }
`;
const Btn = styled.div`
  display: flex;
  cursor: pointer;
  img {
    display: inline-block;
    width: 24px;
  }
  p {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: 36px;
    height: 18px;
    line-height: 12px;
    font-size: 12px;
    text-align: center;
    align-self: center;
  }
  button {
    border-style: none;
  }
`;
