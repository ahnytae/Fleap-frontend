import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Item from "../../components/item/Item";
import WhenModal from "./components/WhenModal";
import WhereModal from "./components/WhereModal";
import WhoModal from "./components/WhoModal";
import FilterModal from "./components/FilterModal";
import styled from "styled-components";

class Daily extends Component {
  constructor() {
    super();
    this.state = {
      when: false,
      where: false,
      who: false,
      filter: false,
    };
  }

  noScroll = () => {
    window.scrollTo(0, 0);
  };

  onClickHandler = (name) => {
    this.state[name]
      ? this.setState(
          { [name]: false },
          window.removeEventListener("scroll", this.noScroll)
        )
      : this.setState(
          { [name]: true },
          window.addEventListener("scroll", this.noScroll)
        );
  };

  modalClosed = () => {
    this.setState({
      when: false,
      where: false,
      who: false,
      filter: false,
    });
  };

  render() {
    const { when, where, who, filter } = this.state;

    return (
      <>
        <DailyContainer>
          <Header />
          <aside>
            <AsideContainer>
              <MainMenu>
                <Link to="/daily">액티비티</Link>
                <Link to="/daily/learn">배움</Link>
                <a>건강&middot;뷰티</a>
                <a>모임</a>
              </MainMenu>
              <SubMenu>
                <Link to="/daily/act/outdoor">아웃도어</Link>
                <a>스포츠</a>
                <a>수상레저</a>
                <a>테마파크</a>
                <a>워터파크&middot;스파</a>
                <a>투어&middot;관람</a>
                <a>대회&middot;축제</a>
                <a>공연&middot;전시</a>
                <a>실내체험</a>
              </SubMenu>
            </AsideContainer>
          </aside>
          <Filter>
            <FilterContainer>
              <button onClick={() => this.onClickHandler("when")}>언제</button>
              <button onClick={() => this.onClickHandler("where")}>
                어디서
              </button>
              <button onClick={() => this.onClickHandler("who")}>누구와</button>
              <button onClick={() => this.onClickHandler("filter")}>
                필터
              </button>
            </FilterContainer>
          </Filter>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <ShowMore>
            <button>개의 액티비티 더보기</button>
          </ShowMore>
        </DailyContainer>
        {when && <WhenModal closed={() => this.modalClosed()} />}
        {where && <WhereModal closed={() => this.modalClosed()} />}
        {who && <WhoModal closed={() => this.modalClosed()} />}
        {filter && <FilterModal closed={() => this.modalClosed()} />}
      </>
    );
  }
}

export default withRouter(Daily);

const DailyContainer = styled.div`
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

  aside {
    background: linear-gradient(279deg, rgb(98, 201, 255), rgb(51, 151, 255));
  }
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
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    text-decoration: none;
    color: inherit;
    &:first-of-type {
      border-bottom: 2px solid white;
      font-weight: bold;
    }
  }
`;

const SubMenu = styled.div`
  width: 650px;
  height: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
  }
`;

const Filter = styled.div`
  width: 930px;
  padding: 45px 0 40px;
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

const ShowMore = styled.div`
  display: flex;
  button {
    width: 492px;
    height: 58.8px;
    padding: 22px 0;
    margin: 0 auto 40px;
    border: 1px solid rgb(238, 238, 238);
    border-image: initial;
    border-radius: 5px;
    line-height: 14px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    color: black;
    font-size: 13px;
  }
`;
