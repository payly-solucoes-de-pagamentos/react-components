import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import MASKS from '../../helpers/masks';
import * as Styles from './styles';

const InputComponent = ({
  id,
  name,
  value,
  type,
  maxLength,
  Icon,
  required,
  disabled,
  placeholder,
  readOnly,
  autoComplete,
  height,
  width,
  label,
  mask,
  maskChar,
  onChange,
}) => {
  const onChangeInput = (event) => {
    const changeResp = {
      value: event.target.value,
      event,
    };
    onChange(changeResp);
  };

  const memoizedInput = useMemo(() => {
    if (mask) {
      return (
        <InputMask mask={mask && MASKS[mask]} maskChar={maskChar} value={value} onChange={onChangeInput} readOnly={readOnly} disabled={disabled}>
          {inputProps => (
            <Styles.Input
              {...inputProps}
              id={id}
              disabled={disabled}
              placeholder={placeholder}
              required={required}
              name={name}
              type={type}
              autoComplete={!autoComplete ? 'off' : ''}
              maxLength={maxLength}
              width={width}
              height={height}
              hasIcon={Boolean(Icon)}
            />
          )
          }
        </InputMask>
      );
    }
    return (
      <Styles.Input
        id={id}
        onChange={onChangeInput}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        name={name}
        type={type}
        autoComplete={!autoComplete ? 'off' : ''}
        maxLength={maxLength}
        width={width}
        height={height}
        hasIcon={Boolean(Icon)}
      />
    );
  }, [mask, value, disabled, required, placeholder]);

  return (
    <Styles.InputContainer className="inputContainer" width={width}>
      <Styles.Label>{label}</Styles.Label>
      {memoizedInput}
      {Icon && (<Styles.IconWrapper><Icon /></Styles.IconWrapper>)}
    </Styles.InputContainer>
  );
};

InputComponent.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  type: PropTypes.string,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
  Icon: PropTypes.func,
  maskChar: PropTypes.bool,
};

InputComponent.defaultProps = {
  style: '',
  type: 'text',
  value: '',
  required: false,
  disabled: false,
  readOnly: false,
  autoComplete: true,
  height: '45px',
  width: 'auto',
  borderColor: '',
  label: '',
  mask: null,
  Icon: null,
  maskChar: false,
};

export default InputComponent;
