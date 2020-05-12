import React, { Component } from "react";
import EachItem from "./components/EachItem";
import styled from "styled-components";

class Item extends Component {
  render() {
    return (
      <ItemContainer>
        <ItemHeader>
          <div>
            <h2>인기 액티비티</h2>
          </div>
          <a>전체 보기</a>
        </ItemHeader>
        <Items>
          <EachItem />
          <EachItem />
          <EachItem />
          <EachItem />
        </Items>
      </ItemContainer>
    );
  }
}

export default Item;

const ItemContainer = styled.div`
  width: 930px;
  height: 355.5px;
  margin: 0 auto 0;
`;

const ItemHeader = styled.div`
  height: 21.6px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  div {
    max-width: calc(100% - 62px);
    line-height: 22px;
    h2 {
      margin: 0 8px 0 0;
    }
  }
  a {
    line-height: 18px;
    font-size: 14px;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
`;
