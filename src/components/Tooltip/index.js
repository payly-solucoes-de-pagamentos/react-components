import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./style";

const Tooltip = React.memo(
  ({ Icon, message, iconColor, iconSize, bgColor, onClick }) => {
    return (
      <Styles.Container role="button" isActive={false} onClick={onClick}>
        {Icon && <Icon color={iconColor} size={iconSize} />}
        <Styles.Text bgColor={bgColor}>
          <span>{message}</span>
        </Styles.Text>
      </Styles.Container>
    );
  }
);

Tooltip.propTypes = {
  message: PropTypes.any,
  Icon: PropTypes.func,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Tooltip;
