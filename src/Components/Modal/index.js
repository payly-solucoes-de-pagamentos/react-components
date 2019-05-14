/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const ModalComponent = React.memo(({
  active,
  ContentComponent,
  width,
  height,
  onCloseModal,
}) => {
  const [isOpen, setIsOpen] = useState(active);

  useEffect(() => {
    setIsOpen(active);
  }, [active]);

  const closeModal = () => {
    setIsOpen(false);
    onCloseModal && onCloseModal();
  };

  const handleBgOverlayClick = (e) => {
    e.preventDefault();
    if (e.target.id.includes('modalOverlay')) {
      setIsOpen(false);
      onCloseModal && onCloseModal();
    }
  };

  return (
    <Styles.BackgroundOverlay id="modalOverlay" isOpen={isOpen} onClick={e => handleBgOverlayClick(e)}>
      <Styles.ModalContainer width={width} height={height}>
        {ContentComponent && <ContentComponent closeModal={closeModal} />}
      </Styles.ModalContainer>
    </Styles.BackgroundOverlay>
  );
});

ModalComponent.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  active: PropTypes.bool,
  ContentComponent: PropTypes.func,
  onCloseModal: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

ModalComponent.defaultProps = {
  active: false,
  width: '420px',
  height: '320px',
  ContentComponent: false,
  onCloseModal: false,
};

export default ModalComponent;
