import React from "react";
import PropTypes from "prop-types";

const IconPaperSmall = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 17"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={color} fillRule="nonzero">
          <path d="M14 16.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h8.125a.5.5 0 0 1 .35.144l4.876 4.8A.5.5 0 0 1 14 5.3v11.2zM13 5.51L8.42 1H1v15h12V5.51z" />
          <path d="M9 .5a.5.5 0 0 0-1 0v5.018a.5.5 0 0 0 .5.5h4.8a.5.5 0 1 0 0-1H9V.5z" />
        </g>
        <path
          stroke={color}
          strokeLinecap="square"
          d="M2.5 8.5h8M2.5 10.5h8M2.5 12.5h6"
        />
      </g>
    </svg>
  );
};

IconPaperSmall.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconPaperSmall.defaultProps = {
  color: "#000000",
  width: "14px",
  height: "17px"
};

export default IconPaperSmall;
