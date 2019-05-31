import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border: 0;
  border: ${ props => props.theme.boxBorder };
  border-radius: ${ props => props.theme.borderRadius };
  background-color = ${ props => props.theme.bgColor};
  height: 35px;
  padding: 0px;
  font-size: 0.8rem;
`;

const Input = ({ placeholder}) => <Container placeholder={placeholder}/>;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default Input;