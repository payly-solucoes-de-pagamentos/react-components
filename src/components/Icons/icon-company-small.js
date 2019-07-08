import React from "react";
import PropTypes from "prop-types";

const IconCompanySmall = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <g fill={color} fillRule="nonzero">
        <path d="M.5 16h8.016a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5zM1 7h7.016v8H1V7z" />
        <path d="M6.5 7a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8.98a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H8.516a.5.5 0 0 1-.5-.5V7H6.5zm8.48 8V1H7v5h1.516a.5.5 0 0 1 .5.5V15h5.964z" />
        <path d="M10.5 16h3.034a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H10.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zm.5-3h2.034v2H11v-2zM3.5 16h2.526a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H3.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zm.5-3h1.526v2H4v-2zM.5 8.421h3.368a.5.5 0 1 0 0-1H.5a.5.5 0 0 0 0 1zM.5 10.105h2.526a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1zM6.5 5h3.368a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0 0 1zM6.5 3h5.053a.5.5 0 1 0 0-1H6.5a.5.5 0 0 0 0 1zM.5 12h1.684a.5.5 0 1 0 0-1H.5a.5.5 0 1 0 0 1z" />
      </g>
    </svg>
  );
};

IconCompanySmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

IconCompanySmall.defaultProps = {
  color: "#ff4e6b",
  size: "16px"
};

export default IconCompanySmall;
