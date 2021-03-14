import React, { Component } from 'react';
import styled from "@emotion/styled";

import { Box } from '../Box';
import { CustomButton } from './CustomButton';
import { Layer } from '../Layer';


export class Modal extends Component {
  state = {
    isOpen: false
  };

  onOpen = () => {
    this.setState({ isOpen: true });
    this.toggleScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.toggleScrollLock();
  };

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  toggleScrollLock = () =>
    document.querySelector("html").classList.toggle("u-lock-scroll");

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, triggerText, role, children } = this.props;
    return (
      <>
        <CustomButton onClick={this.onOpen}>{triggerText}</CustomButton>
        {isOpen && (
          <ModalContent
            modalRef={ref => (this.modalNode = ref)}
            aria-label={ariaLabel}
            content={children}
            onClose={this.onClose}
            onClickAway={this.onClickAway}
            role={role}
          />
        )}
      </>
    );
  }
}

const ModalContent = ({
  ariaLabel,
  onClose,
  onClickAway,
  role = "dialog",
  content,
  modalRef
}) => {
  return (
    <Layer
      align="center"
      aria-label={ariaLabel}
      aria-modal="true"
      background-color="#444444d9"
      justify="center"
      onClick={onClickAway}
      role={role}
      tab-index="-1"
      zIndex={21}
    >
      <Box ref={modalRef}
        height="20em"
        width="23em"
        background="#dddddd"
        boxShadow="0 0 10px 3px rgba(0, 0, 0, 0.1)"
      >
        <Box direction="row" justify="end">
          <ModalClose aria-labelledby="close-modal" onClick={onClose}>
            <UHideVisually id="close-modal">Close</UHideVisually>
            <ModalCloseIcon viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </ModalCloseIcon>
          </ModalClose>
        </Box>
        {content}
      </Box>
    </Layer>
  );
};

const ModalCloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`;

const UHideVisually = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const ModalClose = styled.button`
  padding: 0.5em;
  width: 52px;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
`;
