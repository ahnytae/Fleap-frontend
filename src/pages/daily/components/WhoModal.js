import React, { Component } from "react";
import styled from "styled-components";

export default class WhoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal: false,
    };
  }

  handleClose = () => {
    this.setState({ closeModal: true });
  };

  render() {
    const { closeModal } = this.state;
    const { closed } = this.props;

    return (
      <>
        {!closeModal && (
          <>
            <ModalOverlay onClick={(() => this.handleClose(), closed)} />
            <div></div>
            <div></div>
            <div></div>
          </>
        )}
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
  z-index: 1;
`;
