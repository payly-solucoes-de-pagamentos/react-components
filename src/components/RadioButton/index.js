import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const RadioButton = ({ name, children, identifier, isDefault }) => (
  <Styled.Container>
    <Styled.RadioInput
      defaultChecked={isDefault}
      id={identifier}
      name={name}
      type="radio"
    />
    <Styled.Box htmlFor={identifier}>
      <Styled.RadioHolder />
      <Styled.Text>{children}</Styled.Text>
    </Styled.Box>
  </Styled.Container>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  identifier: PropTypes.string.isRequired,
  isDefault: PropTypes.bool,
};

RadioButton.defaultProps = {
  isDefault: false,
};

export default RadioButton;
