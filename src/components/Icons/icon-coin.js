import React from "react";
import PropTypes from "prop-types";

const IconCoin = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <g fill={color} fillRule="nonzero">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
        <path d="M7.5 11v1a.5.5 0 1 0 1 0v-1a.5.5 0 1 0-1 0zM7.5 4v1a.5.5 0 0 0 1 0V4a.5.5 0 0 0-1 0z" />
        <path d="M6 9.5a2 2 0 1 0 2-2 1 1 0 1 1 1-1 .5.5 0 0 0 1 0 2 2 0 1 0-2 2 1 1 0 1 1-1 1 .5.5 0 0 0-1 0z" />
      </g>
    </svg>
  );
};

IconCoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

IconCoin.defaultProps = {
  color: "#ff4e6b",
  size: "16px"
};

export default IconCoin;
