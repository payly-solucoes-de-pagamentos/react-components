import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./styles";

const Title = props => {
  return <Styles.Title>{props.text}</Styles.Title>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
