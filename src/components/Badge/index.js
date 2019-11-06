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

const Badge = ({
  children,
  Icon,
  IconColor,
  width,
  color,
  dangerText,
  background,
}) => {
  return (
    <Styles.Container className="pc-badge-container">
      <Styles.Badge
        className="pc-badge"
        width={width}
        color={color}
        background={background}
      >
        {Icon && (
          <Styles.IconContainer className="pc-badge-icon-container">
            <Icon color={IconColor} size="12px" />
          </Styles.IconContainer>
        )}
        {children}
      </Styles.Badge>
      {dangerText && renderDanger(dangerText)}
    </Styles.Container>
  );
};

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  IconColor: PropTypes.string,
  dangerText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  Icon: PropTypes.func,
  width: PropTypes.string,
  color: PropTypes.string,
};

Badge.defaultProps = {
  background: 'none',
  width: '100%',
  dangerText: undefined,
  Icon: undefined,
  color: 'black',
  IconColor: '',
};

export default Badge;
