import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import RemoveIcon from '../Icons/remove';

const Toast = memo(({
  color,
  message,
  Icon,
  closeAction,
}) => {
  const isActive = !!message;

  if (isActive) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      closeAction();
    }, 3000);
  }

  return (
    <Styled.Container active={isActive} color={color}>
      <Styled.IconBox>
        {Icon && <Icon color="#FFF" />}
      </Styled.IconBox>
      <Styled.MessageBox>
        {message}
      </Styled.MessageBox>
      <Styled.CloseButton onClick={closeAction}>
        <RemoveIcon size="12px" />
      </Styled.CloseButton>
    </Styled.Container>
  );
});

Toast.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string, // Required to show the Toast
  Icon: PropTypes.func,
  closeAction: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  color: '#4fa444',
  message: '',
  Icon: () => <span>?</span>,
};

export default Toast;
