import React, { Component } from "react";
import CloseX from "../../../images/CloseX";
import styled from "styled-components";

export default class WhereModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subFilterOn: false,
    };
  }

  mainFilterClick = (idx) => {
    this.setState({
      subFilterOn: idx + 1,
    });
  };

  handleClose = () => {
    this.setState({
      subFilterOn: false,
    });
  };

  closeThisPlz = () => {
    this.props.closed();
  };

  render() {
    const { subFilterOn } = this.state;
    const { closed, region, getLocation } = this.props;

    return (
      <>
        <ModalOverlay onClick={closed} />
        <ModalBox>
          <ModalHeader>
            <span>어디서</span>
            <div onClick={closed}>
              <CloseX />
            </div>
          </ModalHeader>
          <ModalBody>
            <MainFilter>
              {region &&
                region.map((region, idx) => {
                  return (
                    <EachMainArea
                      subFilterOn={subFilterOn}
                      onClick={() => {
                        this.mainFilterClick(idx);
                      }}
                    >
                      {region.name}
                    </EachMainArea>
                  );
                })}
            </MainFilter>
            {subFilterOn && (
              <SubFilter>
                <EachSubArea
                  onClick={() => {
                    getLocation(
                      "main",
                      region[subFilterOn - 1].id,
                      region[subFilterOn - 1].name
                    );
                    this.closeThisPlz();
                  }}
                >
                  <span>전체</span>
                  <span>
                    {region[subFilterOn - 1].sub_region_date[0].total_count}
                  </span>
                </EachSubArea>
                {region &&
                  region[subFilterOn - 1].sub_region_date.map((region) => {
                    return (
                      <EachSubArea
                        onClick={() => {
                          getLocation("sub", region.id, region.name);
                          this.closeThisPlz();
                        }}
                      >
                        <span>{region.name}</span>
                        <span>{region.total}</span>
                      </EachSubArea>
                    );
                  })}
              </SubFilter>
            )}
          </ModalBody>
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
  z-index: 3;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 560px;
  background-color: white;
  z-index: 5;
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
  height: 500px;
  display: flex;
`;

const MainFilter = styled.div`
  width: 105px;
  height: 100%;
  background-color: rgb(247, 247, 247);
  overflow-x: hidden;
  overflow-y: scroll;
`;

const EachMainArea = styled.button`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(155, 155, 155);
  font-weight: normal;
  justify-content: center;
  border: none;
  background-color: rgb(247, 247, 247);
  &:nth-of-type(${(props) => props.subFilterOn}) {
    background-color: white;
    color: black;
    font-weight: bold;
  }
`;

const SubFilter = styled.div`
  width: 255px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const EachSubArea = styled.button`
  width: 255px;
  height: 50px;
  padding-left: 40px;
  font-size: 13px;
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  span:first-of-type {
    font-weight: 600;
  }
  span:last-of-type {
    margin-left: 6px;
    color: rgb(155, 155, 155);
    font-weight: 300;
  }
`;
