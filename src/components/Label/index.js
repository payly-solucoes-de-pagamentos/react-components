import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import AlertTriangle from '../../components/Icons/alert-triangle';


const renderDanger = (text) => {
  return (
    <Styles.DangerContainer>
      <AlertTriangle color="#d0021b" /> <span>{text}</span>
    </Styles.DangerContainer>
  )
}

const Label = ({ text, Icon, width, color, dangerText }) => {
  return (
    <Styles.Container>
      <Styles.Label width={width} color={color}>
        <Styles.IconContainer>
          { Icon && <Icon color="#fff" size="12px" /> }
        </Styles.IconContainer>
        {text}
      </Styles.Label>
      { dangerText && renderDanger(dangerText) }
    </Styles.Container>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  dangerText: PropTypes.string,
  Icon: PropTypes.func,
  width: PropTypes.string,
  color: PropTypes.string,
}

Label.defaultProps = {
  width: '100%',
}

export default Label;
