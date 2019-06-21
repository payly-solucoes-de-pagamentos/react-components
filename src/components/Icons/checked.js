import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../styles/theme";

const G = styled.g`
  fill: ${props => props.fill};
  transition: all 0.2s ease;
`;

const Checked = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 84 84"
    >
      <G fill={color} fillRule="nonzero">
        <path d="M80 42C80 21.005 62.995 4 42 4S4 21.005 4 42c0 21 17.002 38 38 38s38-17 38-38zm4 0c0 23.209-18.793 42-42 42S0 65.209 0 42C0 18.795 18.795 0 42 0s42 18.795 42 42z" />
        <path d="M60.577 27.595a2 2 0 1 1 2.846 2.81l-26.667 27a2 2 0 0 1-2.846 0l-13.333-13.5a2 2 0 1 1 2.846-2.81l11.91 12.059 25.244-25.56z" />
      </G>
    </svg>
  );
};

Checked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

Checked.defaultProps = {
  size: "21px",
  color: theme.mainColor
};

export default Checked;
