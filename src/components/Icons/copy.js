import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Path = styled.path`
  stroke: ${props => props.lineColor ? props.lineColor : props.theme.global.main.colorAction};
  transition: transform .3s ease-in-out;
  transform-origin: center;
`

const CopyIcon = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={'21'} height={'25'} viewBox="0 0 21 25">
        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <Path lineColor="#000" d="M9.5 4.2v5h5"/>
            <Path d="M6.5 4.2v-3h9l5 5v15h-6"/>
            <Path d="M15.5 1.2v5h5"/>
            <Path lineColor="#000" d="M14.5 24.2H.5v-20h9l5 5z"/>
        </g>
    </svg>
  );
};

CopyIcon.propTypes = {
  size: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  color: PropTypes.string,
};

CopyIcon.defaultProps = {
  size: '24',
}

export default CopyIcon;
