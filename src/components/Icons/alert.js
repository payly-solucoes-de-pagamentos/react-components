import React from "react";
import PropTypes from "prop-types";

const alert = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fillRule="evenodd">
        <circle
          cx="20"
          cy="20"
          r="19"
          stroke={color || "#FFF"}
          strokeWidth="2"
        />
        <path
          fill={color || "#FFF"}
          d="M20.888 25.467h-1.743L18.3 7h3.435l-.846 18.467zM18 30.646c0-1.581.664-2.372 1.992-2.372.641 0 1.137.204 1.485.61.349.408.523.995.523 1.762 0 .744-.177 1.322-.531 1.735-.354.413-.847.619-1.477.619-.576 0-1.051-.183-1.428-.55-.376-.365-.564-.967-.564-1.804z"
        />
      </g>
    </svg>
  );
};

alert.propTypes = {
  color: PropTypes.string
};

export default alert;
