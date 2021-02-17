import React from "react";
import StyledModal from "./StyledModal";

const Modal = (props) => {
  // console.log(props);
  let className = ["modal", "modalOff"];
  if (props.display) {
    className = ["modal", "modalOn"];
  } else {
    className = ["modal", "modalOff"];
  }

  return (
    <StyledModal>

    </StyledModal>
  );
};

export default Modal;
