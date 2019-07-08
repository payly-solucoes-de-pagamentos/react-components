import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../styles/theme";

const Path = styled.path`
  fill: ${props => props.lineColor || theme.icons.mainColor};
  transition: transform .3s ease-in-out;
  transform-origin: center;
  ${props =>
    props.position === "right" &&
    `
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  `}
  ${props =>
    props.position === "left" &&
    `
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  `}
  ${props =>
    props.position === "up" &&
    `
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
  `}
  ${props =>
    props.position === "down" &&
    `
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  `}
`;

const ArrowComponent = ({ size, color, position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
    >
      <Path
        fillRule="nonzero"
        d="M14.327 6.26a1 1 0 1 1 1.346 1.48l-5.5 5a1 1 0 0 1-1.346 0l-5.5-5a1 1 0 0 1 1.346-1.48L9.5 10.65l4.827-4.389z"
        lineColor={color}
        position={position}
      />
    </svg>
  );
};

ArrowComponent.propTypes = {
  size: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string
};

ArrowComponent.defaultProps = {
  size: "20px",
  lineSize: "2px",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  position: "right"
};

export default ArrowComponent;
