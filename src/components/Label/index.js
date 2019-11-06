import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import AlertTriangle from '../Icons/alert-triangle';

const renderDanger = text => {
  return (
    <Styles.DangerContainer>
      <AlertTriangle color="#d0021b" /> <span>{text}</span>
    </Styles.DangerContainer>
  );
};

const Label = ({
  children,
  Icon,
  IconColor,
  width,
  color,
  dangerText,
  background,
}) => {
  return (
    <Styles.Container className="pc-label-container">
      <Styles.Label
        className="pc-label"
        width={width}
        color={color}
        background={background}
      >
        {Icon && (
          <Styles.IconContainer className="pc-label-icon-container">
            <Icon color={IconColor} size="12px" />
          </Styles.IconContainer>
        )}
        {children}
      </Styles.Label>
      {dangerText && renderDanger(dangerText)}
    </Styles.Container>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  IconColor: PropTypes.string,
  dangerText: PropTypes.string,
  Icon: PropTypes.func,
  width: PropTypes.string,
  color: PropTypes.string,
};

Label.defaultProps = {
  width: '100%',
  dangerText: undefined,
  Icon: undefined,
  color: 'black',
  IconColor: '',
};

export default Label;
