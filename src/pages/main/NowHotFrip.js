import React, { Component } from "react";
import Items from "../../components/item/Items";
import styled from "styled-components";

class NowHotFrip extends Component {
  state = {
    hotFrip: [],
  };

  componentDidMount() {
    fetch("http://192.168.0.7:8000/frip?tag=hotfrip&limit=20")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotFrip: res.data,
        });
      });
  }

  render() {
    const { hotFrip } = this.state;
    return (
      <Wrapper>
        <Container>
          <Uppertitle>
            <Items data={hotFrip} topTitle="지금 뜨는 프립" />
          </Uppertitle>
        </Container>
      </Wrapper>
    );
  }
}
export default NowHotFrip;

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
`;

const Uppertitle = styled.div`
  margin: 40px 0 30px 0;
  font-size: 18px;
`;
