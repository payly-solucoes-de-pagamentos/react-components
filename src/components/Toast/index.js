import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import RemoveIcon from '../Icons/remove';

const Toast = memo(
  ({ color, children, Icon, closeAction, isActive, timer }) => {
    let timeOut;
    if (isActive) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      timeOut = setTimeout(() => {
        closeAction();
      }, timer);
    }

    const onCloseByClick = () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      closeAction();
    };

    return (
      <Styled.Container className="pc-toast" active={isActive} color={color}>
        <Styled.IconBox className="pc-toast-icon">
          {Icon && <Icon color="#FFF" />}
        </Styled.IconBox>
        <Styled.MessageBox className="pc-toast-message">
          {children}
        </Styled.MessageBox>
        <Styled.CloseButton
          className="pc-toast-close-button"
          onClick={onCloseByClick}
        >
          <RemoveIcon className="pc-toast-close-button-icon" size="12px" />
        </Styled.CloseButton>
      </Styled.Container>
    );
  }
);

Toast.propTypes = {
  color: PropTypes.string,
  Icon: PropTypes.node,
  closeAction: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  timer: PropTypes.number,
};

Toast.defaultProps = {
  color: '#4fa444',
  Icon: false,
  isActive: false,
  timer: 3000,
};

export default Toast;
