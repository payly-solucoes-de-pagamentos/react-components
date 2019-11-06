import React from "react";
import PropTypes from "prop-types";
import { LoaderCircle, StyledErrorGroup, StyledSuccessGroup } from "./style";

const SentFeedback = ({ color, success, error, size, strokeWidth }) => {
  let SetPath = (
    <LoaderCircle
      className="pc-sentfeedback-loader"
      cx="45"
      cy="45"
      r="42"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
  if (success) {
    SetPath = (
      <StyledSuccessGroup
        fill="#4FA444"
        fill-rule="nonzero"
        className="pc-sentfeedback-success"
      >
        <path d="M 82,42 C 82.457222,20.649383 63.349296,1.2765601 41.748159,1.748 20.758157,2.206102 1.999841,21.004841 1.999841,41.999841 1.999841,62.999841 21.002,82 42,82 62.998,82 81.55039,62.995186 82,42 Z m 0.622477,0.06292 C 82.133245,64.864914 65.072016,82.682432 42,82.733051 18.793056,82.783966 1.0314603,61.264742 1,42 0.96843711,22.67244 18.79527,0.88816026 42,1 64.712399,1.1094669 83.117659,18.983631 82.622477,42.062921 Z" />
        <path d="m 62.356661,29.063221 c 1.872689,-1.959058 2.327703,-1.603754 0.392642,0.293721 L 35.910661,56.470678 c -0.783016,0.792837 -0.372306,0.748346 -1.155322,-0.04449 L 21.555814,43.193136 C 19.620753,41.295661 20.126582,40.82662 21.999271,42.785678 L 35.333,55.912475 C 43.750725,47.396879 53.938856,37.574489 62.356661,29.063221 Z" />
      </StyledSuccessGroup>
    );
  } else if (error) {
    SetPath = (
      <StyledErrorGroup fill-rule="nonzero" className="pc-sentfeedback-error">
        <path d="M 42,81.112288 C 62.991,81.112288 81.067797,62.993 81.067797,42 81.067797,21.007 63.02246,2.8674307 42.03146,2.8674307 21.04046,2.8674307 2.8359704,21.069921 2.8359704,42.062921 2.8359704,63.055921 21.009,81.112288 42,81.112288 Z M 42,82 C 19.415853,82.138966 2.3194041,63.929328 2,42 1.6722654,19.498723 19.93536,2.2503927 42,2 64.521679,1.7444208 82.047547,19.831034 82,42 81.952757,64.02715 64.655918,81.860593 42,82 Z" />
        <path d="m 25.990271,59.524169 c -1.885053,1.820645 -2.602035,0.569765 -0.78139,-1.315288 L 58.119898,25.030915 c 1.885053,-1.820645 2.957967,-1.01468 1.137322,0.870373 z" />
        <path d="m 59.791119,58.831763 c 1.820645,1.885052 0.658747,2.691017 -1.226305,0.870373 L 25.386847,26.524169 c -1.820644,-1.885052 -0.836713,-3.046949 1.048339,-1.226305 z" />
      </StyledErrorGroup>
    );
  }

  return (
    <svg
      className="pc-sentfeedback"
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
