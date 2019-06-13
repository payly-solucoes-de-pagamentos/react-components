import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : '#A0A0A0'};
  transition: all 0.2s ease;
`;

const SortIndicatorsICon = ({ color, size }) => {
  return (
    <svg className="sortIndicator" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 15">
        <G fill={color} fillRule="nonzero">
          <path d="m5.09484,6.4915l3.4434,-3.49057l3.4434,3.49057l-6.88679,0l-0.00001,0z" />
          <path d="m5.14201,13.09527l3.4434,-3.49057l3.4434,3.49057l-6.8868,0z" transform="rotate(-179.58953857421875 8.58541202545166,11.349987030029297) "/>
        </G>
    </svg>
  );
};

SortIndicatorsICon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

SortIndicatorsICon.defaultProps = {
  size: '21px',
}

export default SortIndicatorsICon;
