import React from 'react';
import PropTypes from 'prop-types';
import { GRAY_MEDIUM } from '../../styles/variables';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : 'none'};
  transition: all 0.2s ease;
`;

const TrashHard = ({ size, color, alt }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 30 30" alt={alt}>
      <G>
          <G fill={ color || GRAY_MEDIUM }>
            <path id="a" d="M11 5c0-1.605 1.047-3 2.5-3h3C17.953 2 19 3.395 19
            5h3a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2h-1v16a2 2 0 0 1-2 2H8a2 2 0 0
            1-2-2V10H5a1 1 0 1 1 0-2h1V7a2 2 0 0 1 2-2h3zm2 0h4c0-.605-.297-1-.5-1h-3
            c-.203 0-.5.395-.5 1zM8 8h14V7H8v1zm14 2H8v16h14V10zm-12 2a1 1 0 0 1 2 0v12a1
            1 0 0 1-2 0V12zm8 0a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0V12zm-4 0a1 1 0 0 1 2 0v12a1 1
            0 0 1-2 0V12z"/>
          </G>
      </G>
    </svg>
  );
};

TrashHard.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  alt: PropTypes.string,
};

TrashHard.defaultProps = {
  size: '21px',
}

export default TrashHard;
