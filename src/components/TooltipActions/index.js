import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const TooltipActions = React.memo(({ tooltips, isOpen }) => {
  return (
    <Styles.Container role="button">
      <Styles.TooltipContainer isOpen={isOpen} >
        { tooltips.map((Tooltip, i) => <Styles.TooltipBtn key={`action-${i}`}><Tooltip/></Styles.TooltipBtn>) }
      </Styles.TooltipContainer>
      <Styles.Dots isOpen={isOpen}>...</Styles.Dots>
    </Styles.Container>
  );
});

TooltipActions.propTypes = {
  tooltips: PropTypes.arrayOf(PropTypes.any),
  isOpen: PropTypes.bool,
};

TooltipActions.defaultProps = {
  isOpen: false,
}

export default TooltipActions;
