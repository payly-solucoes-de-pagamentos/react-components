import React, { useState } from "react";
import PropTypes from "prop-types";
import { components } from "react-select";
import * as Style from "./style";
import Arrow from "../Icons/arrow";
import CheckIcon from "../Icons/check";
import {
  GRAY_DARKER,
  FONT_SIZE_4,
  GRAY_LIGHTER,
  BORDER_RADIUS,
  MAIN_COLOR,
  FONT_WEIGHT_BOLD,
  DANGER_COLOR
} from "../../styles/variables";
import { stringLimitator } from "../../helpers";

const customStyles = error => ({
  container: provided => ({
    ...provided,
    justifySelf: "flex-end",
    flexGrow: 1
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    fontSize: "13px",
    fontWeight: "normal",
    height: 50,
    ":hover": {
      backgroundColor: "#f7f7f7"
    },
    ":active": {
      padding: 10
    }
  }),
  control: (provided, { selectProps }) => ({
    height: selectProps.basicStyle || 45,
    display: "flex",
    border: `1px solid ${error ? DANGER_COLOR : GRAY_LIGHTER}`,
    borderRadius: "3px",
    alignItems: "center"
  }),
  menu: provided => ({
    ...provided,
    boxShadow: "0 3px 6px 2px rgba(0, 0, 0, 0.1)",
    minWidth: "164px",
    right: 0,
    zIndex: 2
  }),
  singleValue: (provided, { selectProps }) => ({
    ...provided,
    color: selectProps.menuIsOpen ? "black" : "#9b9b9b",
    transition: "all 0.1s ease"
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      color: "#FFF",
      borderRadius: "15px",
      fontSize: FONT_SIZE_4,
      fontWeight: FONT_WEIGHT_BOLD
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#FFF",
    padding: 5,
    borderRadius: "15px",
    fontSize: "13px"
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    ":hover": {
      borderRadius: "15px",
      color: "white"
    }
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: "13px"
  })
});

const OPTIONS_EXAMPLE = [
  { value: "1", label: "Value 01" },
  { value: "2", label: "Value 02" },
  { value: "3", label: "Value 03" }
];

const Option = props => {
  return (
    <components.Option {...props}>
      <label>{props.label}</label>
      {props.isSelected ? <CheckIcon /> : null}
    </components.Option>
  );
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span {...innerProps}></span>;
};

const MultiValueContainerHandler = props => {
  const {
    selectProps: { value },
    labelLimitator
  } = props;

  if (labelLimitator) {
    return (
      <>
        <components.MultiValueContainer {...props} />
        <Style.LabelCounter labelLimitator={labelLimitator}>
          {labelLimitator && (value.length > 1 && `+${value.length - 1}`)}
        </Style.LabelCounter>
      </>
    );
  }

  return <components.MultiValueContainer {...props} />;
};

const MultiValueLabelHandler = props => {
  const customProp = props.labelLimitator
    ? Object.assign(
        { ...props },
        { children: stringLimitator(props.children, 7) }
      )
    : props;
  return <components.MultiValueLabel {...customProp} />;
};

const IndicatorsContainer = props => {
  const { basicStyle, menuIsOpen } = props.selectProps;
  return (
    <Style.SelectIconContainer>
      <Arrow
        size={basicStyle ? "16px" : "20px"}
        color={basicStyle && menuIsOpen ? "black" : "#9b9b9b"}
        position={menuIsOpen ? "up" : "down"}
      />
    </Style.SelectIconContainer>
  );
};

const SelectComponents = ({
  id,
  value,
  name,
  onChange,
  placeholder,
  isMultiple,
  options,
  error,
  basicStyle,
  isSearchable,
  labelLimitator
}) => {
  const MultiValueContainer = props => (
    <MultiValueContainerHandler {...props} labelLimitator={labelLimitator} />
  );
  const MultiValueLabel = props => (
    <MultiValueLabelHandler {...props} labelLimitator={labelLimitator} />
  );

  return (
    <Style.MultiSelect
      id={`product-${name}-${id}`}
      name={`${name}-${id}`}
      onChange={value => onChange(value)}
      placeholder={placeholder}
      options={options}
      value={value}
      isMulti={isMultiple}
      styles={customStyles(error)}
      className="portal-select-box"
      classNamePrefix="select"
      isClearable={false}
      basicStyle={basicStyle}
      isSearchable={isSearchable}
      hideSelectedOptions={false}
      closeMenuOnSelect
      labelLimitator={labelLimitator}
      components={{
        Option,
        IndicatorSeparator,
        IndicatorsContainer,
        MultiValueContainer,
        MultiValueLabel
      }}
      arrowRender={() => {
        return <div>T</div>;
      }}
    />
  );
};

SelectComponents.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  options: PropTypes.array,
  isMultiple: PropTypes.bool,
  placeholder: PropTypes.string,
  basicStyle: PropTypes.bool,
  isSearchable: PropTypes.bool,
  labelLimitator: PropTypes.number
};

SelectComponents.defaultProps = {
  options: OPTIONS_EXAMPLE,
  isMultiple: false,
  placeholder: "Selecione",
  basicStyle: false,
  isSearchable: false,
  labelLimitator: undefined
};

export default SelectComponents;
