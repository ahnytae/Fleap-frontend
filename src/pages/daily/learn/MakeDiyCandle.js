import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import styled from "styled-components";
import EachItem from "../../../components/item/components/EachItem";

class MakeDiyCandle extends Component {
  render() {
    let ItemList = Array(20)
      .fill()
      .map(() => {
        return <StyledEachItem />;
      });

    return (
      <LearnContainer>
        <Header />
        <StyledAside>
          <AsideContainer>
            <MainMenu>
              <Link to="/daily">액티비티</Link>
              <Link to="/daily/learn">배움</Link>
              <a>건강&middot;뷰티</a>
              <a>모임</a>
            </MainMenu>
            <SubMenu>
              <Link to="/daily/learn/makediy">공예&middot;DIY</Link>
              <a>요리</a>
              <a>음료</a>
              <a>음악&middot;예술</a>
              <a>스포츠</a>
              <a>어학</a>
              <a>사진&middot;영상</a>
              <a>미술&middot;드로잉</a>
              <a>재테크</a>
              <a>투잡</a>
              <a>실무</a>
              <a>온라인</a>
              <a>취업&middot;이직</a>
              <a>교양&middot;강좌</a>
              <a>아웃도어</a>
              <a>홈취미</a>
            </SubMenu>
          </AsideContainer>
        </StyledAside>
        <LearnMenu>
          <div>
            <Link to="/daily/learn/makediy">전체</Link>
            <Link to="/daily/learn/makediy/pot">도자기</Link>
            <a>가죽</a>
            <a>향수</a>
            <a>목공</a>
            <a>플라워</a>
            <Link to="/daily/learn/makediy/candle">캔들&middot;석고방향제</Link>
            <a>비누&middot;입욕제</a>
            <a>조명&middot;네온사인</a>
            <a>기타</a>
          </div>
        </LearnMenu>
        <Filter>
          <FilterContainer>
            <button>언제</button>
            <button>어디서</button>
            <button>누구와</button>
            <button>필터</button>
          </FilterContainer>
        </Filter>
        <MainContainer>
          <ItemListContainer>{ItemList}</ItemListContainer>
          <footer>Pagination</footer>
        </MainContainer>
      </LearnContainer>
    );
  }
}

export default withRouter(MakeDiyCandle);

const LearnContainer = styled.div`
  header {
    a:nth-of-type(2) {
      font-weight: bold;
      &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background-color: rgb(51, 151, 255);
        margin: 12px auto 0px;
        border-radius: 3px;
      }
    }
  }
`;

const StyledAside = styled.aside`
  background: linear-gradient(279deg, rgb(98, 201, 255), rgb(51, 151, 255));
  margin-bottom: 40px;
`;

const AsideContainer = styled.div`
  width: 930px;
  height: 163.6px;
  padding: 40px 0 40px;
  margin: auto;
  color: white;
`;

const MainMenu = styled.div`
  width: 400px;
  display: flex;
  a {
    width: 100px;
    height: 35.6px;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    text-decoration: none;
    color: inherit;
    &:nth-of-type(2) {
      border-bottom: 2px solid white;
      font-weight: bold;
    }
  }
`;

const SubMenu = styled.div`
  width: 930px;
  height: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    &:first-of-type {
      font-weight: bold;
    }
  }
`;

const LearnMenu = styled.div`
  height: 18px;
  width: 930px;
  margin: 0 auto 20px;
  div {
    width: 610px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 14px;
      text-decoration: none;
      color: inherit;
      &:nth-of-type(7) {
        color: rgb(51, 151, 255);
      }
    }
  }
`;

const Filter = styled.div`
  width: 930px;
  padding: 5px 0 40px;
  margin: auto;
`;

const FilterContainer = styled.div`
  width: 356px;
  display: flex;
  justify-content: space-between;
  button {
    border: 1px solid rgb(238, 238, 238);
    border-image: initial;
    border-radius: 5px;
    line-height: 14px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    color: initial;
    font-size: 14px;
    font-weight: 500;
    padding: 11px 20px;
  }
`;

const ItemListContainer = styled.div``;

const StyledEachItem = styled(EachItem)``;

const MainContainer = styled.main`
  width: 930px;
  margin: auto;
  ${ItemListContainer} {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  footer {
    height: 40px;
    margin: 30px 0;
  }
`;
