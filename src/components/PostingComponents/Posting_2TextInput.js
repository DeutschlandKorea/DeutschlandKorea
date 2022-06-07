import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: ${props => props.height}px;
  background-color: lightsteelblue;
  border: 1px solid #000000;
  width: 344px;
`

const Posting_2TextInput = ({height}) => {
    return(
        <Container height={height}>

        </Container>
    )
}
export default Posting_2TextInput;