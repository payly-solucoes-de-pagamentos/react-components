import React from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import Input from './index';
import MASKS from '../../helpers/masks';
import IconClock from '../Icons/clock';

const onSetTime = (value, onChange, dayTime) => {
  if (dayTime) {
    onChange(MASKS['24_HOURS'](value));
  } else {
    onChange(value);
  }
};

const timeStringFormatter = (momentObj) => {
  let finalString;

  if (momentObj.hour()) {
    finalString = `${momentObj.hour()}h`;

    if (momentObj.minutes()) {
      finalString += momentObj.minutes().toString();
    }
  } else {
    finalString = `${momentObj.minutes().toString()}m`;
  }


  return finalString;
};

const TimeInput = React.memo(({
  time,
  dayTime,
  onChange,
  width,
  height,
  placeholder,
  name,
  // In minutes
  defineNextTime,
}) => {
  const timeString = defineNextTime && timeStringFormatter(moment().startOf('day').minutes(defineNextTime));

  const placeholderText = timeString ? `Em até ${timeString}` : placeholder;

  return (
    <Input
      placeholder={placeholderText}
      onChange={({ event, value }) => { onSetTime(value, onChange, dayTime); }}
      Icon={IconClock}
      mask="HOUR"
      name={name}
      value={defineNextTime ? undefined : time}
      width={width}
      height={height}
      disabled={!!defineNextTime}
    />
  );
});

TimeInput.propTypes = {
  time: PropType.string,
  onChange: PropType.func.isRequired,
  name: PropType.string.isRequired,
  placeholder: PropType.string,
  dayTime: PropType.bool,
  width: PropType.string,
  height: PropType.string,
  defineNextTime: PropType.number,
};

TimeInput.defaultProps = {
  dayTime: false,
  width: '200px',
  height: '45px',
  placeholder: 'hh / mm',
  defineNextTime: null,
  time: undefined,
};

export default TimeInput;
