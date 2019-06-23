import React from "react";
import PropTypes from "prop-types";
import { LoaderCircle, StyledErrorGroup, StyledSuccessGroup } from "./style";

const SentFeedback = ({ color, success, error, size, strokeWidth }) => {
  let SetPath = (
    <LoaderCircle
      cx="45"
      cy="45"
      r="42"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
  if (success) {
    SetPath = (
      <StyledSuccessGroup fill="#4FA444" fill-rule="nonzero">
        <path d="M80 42C80 21.005 62.995 4 42 4S4 21.005 4 42c0 21 17.002 38 38 38s38-17 38-38zm4 0c0 23.209-18.793 42-42 42S0 65.209 0 42C0 18.795 18.795 0 42 0s42 18.795 42 42z" />
        <path d="M60.577 27.595a2 2 0 1 1 2.846 2.81l-26.667 27a2 2 0 0 1-2.846 0l-13.333-13.5a2 2 0 1 1 2.846-2.81l11.91 12.059 25.244-25.56z" />
      </StyledSuccessGroup>
    );
  } else if (error) {
    SetPath = (
      <StyledErrorGroup fill-rule="nonzero">
        <path d="M42 80c20.991 0 38-17.007 38-38S62.991 4 42 4 4 21.007 4 42s17.009 38 38 38zm0 4C18.8 84 0 65.202 0 42S18.8 0 42 0s42 18.798 42 42-18.8 42-42 42z" />
        <path d="M27.414 60.414a2 2 0 0 1-2.828-2.828l33-33a2 2 0 0 1 2.828 2.828l-33 33z" />
        <path d="M60.414 57.586a2 2 0 0 1-2.828 2.828l-33-33a2 2 0 0 1 2.828-2.828l33 33z" />
      </StyledErrorGroup>
    );
  }

  return (
    <svg
      version="1.1"
      viewBox="-8 -8 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {SetPath}
    </svg>
  );
};

SentFeedback.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  strokeWidth: PropTypes.string
};

SentFeedback.defaultProps = {
  color: undefined,
  success: undefined,
  error: undefined,
  size: "90px",
  strokeWidth: "4"
};

export default SentFeedback;
