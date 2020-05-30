import React, { Component } from "react";
import Items from "../../components/item/Items";
import styled from "styled-components";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
    };
  }
  componentDidMount = () => {
    fetch(
      `http://13.59.219.151:8000/frip/search?keyword=${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            searchData: res.data,
          },
          () => console.log("search", this.state.searchData)
        );
      });
  };
  //test
  render() {
    const { searchData } = this.state;
    return (
      <Wrapper>
        <Container>
          <div>
            <h2>검색결과</h2>
          </div>
          <Items data={searchData} />
        </Container>
      </Wrapper>
    );
  }
}
export default SearchPage;

const Wrapper = styled.div`
  img {
    border-radius: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  max-width: 970px;
  width: 100%;
  min-height: 1px;
  flex-flow: column nowrap;
  margin: 0px auto;
  padding: 0px 20px;

  h2 {
    margin: 40px 0 30px 0;
    font-size: 18px;
  }
`;
