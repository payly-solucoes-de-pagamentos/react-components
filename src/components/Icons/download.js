import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../styles/theme";

const Svg = styled.svg`
  &:hover {
    & g {
      fill: ${theme.icons.mainColor};
    }
  }
`;

const G = styled.g`
  fill: ${props => props.fill || theme.icons.mainColor};
  transition: all 0.2s ease;
`;

const Download = ({ color, size }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <G fill={color} fillRule="nonzero">
        <path d="M12.504 7.02a.5.5 0 0 1 .34.863l-4.506 3.98a.5.5 0 0 1-.689 0L3.156 7.874a.5.5 0 0 1 .345-.862h1.507V.5a.5.5 0 0 1 .5-.5h5.007a.5.5 0 0 1 .5.5v6.51l1.489.01zm-4.509 3.79l3.257-2.797-.74-.006a.5.5 0 0 1-.497-.5V1H6.008v6.513a.5.5 0 0 1-.5.5h-.757l3.244 2.798z" />
        <path d="M15 15v-2.5a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0V15h14z" />
      </G>
    </Svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

Download.defaultProps = {
  size: "21px"
};

export default Download;
