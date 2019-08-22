import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const RadioButton = ({ name, children, identifier, isDefault, callback }) => {
  const onChangeHandler = e => {
    if (e.target.checked) {
      callback();
    }
  };
  return (
    <Styled.Container className="pc-radioButton">
      <Styled.RadioInput
        className="pc-radioButton-radioInput"
        defaultChecked={isDefault}
        id={identifier}
        name={name}
        onChange={onChangeHandler}
        type="radio"
      />
      <Styled.Box htmlFor={identifier} className="pc-radioButton-box">
        <Styled.RadioHolder className="pc-radioButton-box-RadioHolder" />
        <Styled.Text className="pc-RadioButton-box-Text">
          {children}
        </Styled.Text>
      </Styled.Box>
    </Styled.Container>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  identifier: PropTypes.string.isRequired,
  callback: PropTypes.func,
  isDefault: PropTypes.bool,
};

RadioButton.defaultProps = {
  isDefault: false,
  callback: () => {},
};

export default RadioButton;
