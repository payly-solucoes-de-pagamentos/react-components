import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconSelected from "./icon_selected.svg";

const GRAY_LIGHTER = "#ababab";

const Container = styled.div`
  display: inline-flex;
  label {
    position: relative;
  }
`;

const Checkbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span`
  width: 17px;
  height: 17px;
  display: block;
  border-radius: 2px;
  ${props =>
    props.checked &&
    `
    background: #4FA444;
  `}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &::after {
    content: "";
    position: absolute;
    margin: auto;
    box-sizing: border-box;
    cursor: pointer;
    width: 17px;
    height: 17px;
    border: 2px solid ${GRAY_LIGHTER};
    background-size: 90%;
    bottom: 0;
    border-radius: 2px;
    ${props =>
      props.checked &&
      `
      border: none;
      width: 15px;
      height: 15px;
      top: 3px;
      left: 1px;
      background: url(${IconSelected}) no-repeat;
    `}
  }
`;

const CheckboxComp = ({ id, name, checked, onChange }) => {
  return (
    <Container>
      <Checkbox
        id={`check-${id}`}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`check-${id}`}>
        <CustomCheckbox checked={checked} />
      </label>
    </Container>
  );
};

CheckboxComp.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

CheckboxComp.defaultProps = {
  id: "",
  name: ""
};

export default CheckboxComp;
