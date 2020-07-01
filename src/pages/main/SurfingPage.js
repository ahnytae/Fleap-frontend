import React, { Component } from "react";
import Items from "../../components/item/Items";
import Headers from "../../components/header/Header";
import styled from "styled-components";

class Surfing extends Component {
  state = {
    surfing: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/frip?event=surfing&limit=20")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          surfing: res.data,
        }, ()=> {console.log(res.data)});
      });
  }

  render() {
    const { surfing } = this.state;
    return (
      <Wrapper>
        <Container>
          <Headers />
          < MainImg src = "//res.cloudinary.com/frientrip/image/upload/f_auto/웹_기획전내부배너_1860x744_1592886811876" />
          <Items data={surfing} categ={"aht"}/>
        </Container>
      </Wrapper>
    );
  }
}
export default Surfing;

const MainImg = styled.img`
  padding-bottom: 25px;
`;

const Wrapper = styled.div`
  img {
    border-radius: 5px;
  }

  header {
    a:first-of-type {
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
