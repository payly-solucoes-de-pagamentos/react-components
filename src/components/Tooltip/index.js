import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import * as Styles from './style';

const Tooltip = React.memo(
  ({ Icon, children, iconColor, iconSize, bgColor, onClick, fontColor }) => {
    return (
      <Styles.Container
        className="pc-tooltip"
        role="button"
        isActive={false}
        onClick={onClick}
      >
        {Icon && (
          <Icon className="pc-tooltip-icon" color={iconColor} size={iconSize} />
        )}
        <Styles.Text
          fontColor={fontColor}
          className="pc-tooltip-text"
          bgColor={bgColor}
        >
          <span>{children}</span>
        </Styles.Text>
      </Styles.Container>
    );
  }
);

Tooltip.propTypes = {
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.element).isRequired,
  onClick: PropTypes.func.isRequired,
  fontColor: PropTypes.string,
  Icon: PropTypes.oneOfType(PropTypes.element, undefined),
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  bgColor: PropTypes.string,
};

Tooltip.defaultProps = {
  fontColor: 'white',
  Icon: undefined,
  iconColor: theme.secondColor,
  iconSize: '17px',
  bgColor: theme.button.backgroundMain,
};

export default Tooltip;
