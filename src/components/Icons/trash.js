import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;
`;

const TrashIcon = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 54 60">
        <G fill={color} fillRule="nonzero">
          <path d="M7 60a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h40a1 1 0 0 1 1 1v52a1 1 0 0 1-1 1H7zm1-2h38V8H8v50z"/>
          <path d="M17 8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H17zm1-2h18V2H18v4z"/>
          <path d="M.99 8A.995.995 0 0 1 0 7c0-.552.443-1 .99-1h52.02c.547 0 .99.448.99 1s-.443 1-.99 1H.99zM16 17a1 1 0 0 1 2 0v30a1 1 0 0 1-2 0V17zM26 17a1 1 0 0 1 2 0v30a1 1 0 0 1-2 0V17zM36 17a1 1 0 0 1 2 0v30a1 1 0 0 1-2 0V17z"/>
        </G>
    </svg>
  );
};

TrashIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

TrashIcon.defaultProps = {
  size: '21px',
}

export default TrashIcon;
