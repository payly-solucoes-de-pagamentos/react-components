import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MainButton, SecondaryButton, IconButton, FileButton, HiddenInput } from './style';
import { GRAY_DARKER, GRAY_MEDIUM, FONT_SIZE_4, FONT_WEIGHT_BOLD } from '../../styles/variables';

const ButtonComponent = (props) => {
  const {
    bgColor,
    color,
    disabled,
    type,
    outline,
    onClick,
    icon,
    borderColor,
    fontSize,
    fontWeight,
    width,
    height,
    isSecondary,
    children,
    fileCharacteristic,
  } = props;

  let Button;
  // If button must open input of files
  if (Object.keys(fileCharacteristic).length) {
    Button = (props) => (
      <FileButton
        htmlFor={fileCharacteristic.id}
        {...props}
        type={undefined}
      >
        {icon && (<IconButton src={icon} />)}
        {children}
        <HiddenInput
          type="file"
          multiple={fileCharacteristic.multiple}
          id={fileCharacteristic.id}
          name={fileCharacteristic.name}
          onChange={fileCharacteristic.onChange}
          accept={fileCharacteristic.accept}
          disabled={props.disabled}
        />
      </FileButton>
    );

  } else {
    // Choose between primary or secondary button
    Button = isSecondary ? SecondaryButton : MainButton;
  }

  return (
    <Button
      bgColor={bgColor}
      color={color}
      outline={outline}
      disabled={disabled}
      type={`${type}`}
      borderColor={borderColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      height={height}
      onClick={onClick}
    >
      {icon && (<IconButton src={icon} />)}
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.any,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isSecondary: PropTypes.bool,
  fileCharacteristic: PropTypes.object,
};

ButtonComponent.defaultProps = {
  id: '',
  type: 'button',
  children: '',
  disabled: false,
  outline: false,
  bgColor: 'transparent',
  width: 'auto',
  height: '50px',
  color: GRAY_DARKER,
  borderColor: GRAY_MEDIUM,
  icon: null,
  fontSize: '15px',
  fontWeight: FONT_WEIGHT_BOLD,
  isSecondary: false,
  fileCharacteristic: {},
  onClick: () => { },
};

export default ButtonComponent;


