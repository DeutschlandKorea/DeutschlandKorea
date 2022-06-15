import React from "react";
import styled from "styled-components/native";
import {useWindowDimensions} from "react-native";
import PropTypes from "prop-types";

const CustomTextInput = styled.TextInput`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0.10);
  color: rgba(0, 0, 0, 0.20);
`
const Posting_2TextInput = ({height, placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
    const width = useWindowDimensions().width;
    return <CustomTextInput
        width={width-32}
        height={height}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
    />
}
export default Posting_2TextInput;

Posting_2TextInput.defaultProps = {
    height: 55,
    placeholder: "내용을 입력해주세요.",
}
Posting_2TextInput.propTypes = {
    height: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.func,
}
