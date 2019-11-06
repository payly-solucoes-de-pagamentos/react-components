import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const HorizontalLoader = ({ height }) => (
  <Styled.HorizontalLoader>
    <Styled.InternalLoader height={height} />
  </Styled.HorizontalLoader>
);

HorizontalLoader.propTypes = {
  height: PropTypes.string,
};

HorizontalLoader.defaultProps = {
  height: '30px',
};

export default HorizontalLoader;
