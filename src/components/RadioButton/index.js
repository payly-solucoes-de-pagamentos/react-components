import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const RadioButton = ({ name, children, identifier, isDefault, callback }) => {
  const onChangeHandler = e => {
    if (e.target.checked) {
      callback();
    }
  };
  return (
    <Styled.Container>
      <Styled.RadioInput
        defaultChecked={isDefault}
        id={identifier}
        name={name}
        onChange={onChangeHandler}
        type="radio"
      />
      <Styled.Box htmlFor={identifier}>
        <Styled.RadioHolder />
        <Styled.Text>{children}</Styled.Text>
      </Styled.Box>
    </Styled.Container>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  identifier: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  isDefault: PropTypes.bool,
};

RadioButton.defaultProps = {
  isDefault: false,
};

export default RadioButton;
