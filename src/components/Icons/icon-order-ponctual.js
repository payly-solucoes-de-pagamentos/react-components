import React from "react";
import PropTypes from "prop-types";

const IconOrderPonctual = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 17"
    >
      <g fill={color} fillRule="nonzero">
        <path d="M14 16.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h8.125a.5.5 0 0 1 .35.144l4.876 4.8A.5.5 0 0 1 14 5.3v11.2zM13 5.51L8.42 1H1v15h12V5.51z" />
        <path d="M9 .5a.5.5 0 0 0-1 0v5.018a.5.5 0 0 0 .5.5h4.8a.5.5 0 1 0 0-1H9V.5zM3.854 10.127a.5.5 0 1 0-.708.707l2.334 3.022a.5.5 0 0 0 .707 0l4.667-5.002a.5.5 0 0 0-.708-.708l-4.313 4.65-1.98-2.669z" />
      </g>
    </svg>
  );
};

IconOrderPonctual.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconOrderPonctual.defaultProps = {
  color: "#ff4e6b",
  width: "14px",
  height: "17px"
};

export default IconOrderPonctual;
