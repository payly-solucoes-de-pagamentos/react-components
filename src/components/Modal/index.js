/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as Styles from "./styles";

const ModalComponent = React.memo(
  ({ active, children, width, height, onCloseModal }) => {
    const [isOpen, setIsOpen] = useState(active);

    useEffect(() => {
      setIsOpen(active);
    }, [active]);

    const handleBgOverlayClick = e => {
      e.preventDefault();
      if (e.target.id.includes("modalOverlay")) {
        setIsOpen(false);
        onCloseModal && onCloseModal();
      }
    };

    return (
      <Styles.BackgroundOverlay
        id="modalOverlay"
        isOpen={isOpen}
        onClick={e => handleBgOverlayClick(e)}
      >
        <Styles.ModalContainer width={width} height={height}>
          {children}
        </Styles.ModalContainer>
      </Styles.BackgroundOverlay>
    );
  }
);

ModalComponent.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  onCloseModal: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

ModalComponent.defaultProps = {
  active: false,
  width: "420px",
  height: "320px",
  children: false,
  onCloseModal: false
};

export default ModalComponent;
