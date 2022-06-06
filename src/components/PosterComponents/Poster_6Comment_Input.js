import React from "react";
import styled from "styled-components/native";
import {Dimensions} from "react-native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  height: 31px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
  background-color: lightsteelblue;
`
/*--------------------------------------------------------------------------------------*/
const TextInput = styled.TextInput`
  position: absolute;
  left: 9px;
  height: 22px;
  width: ${props => props.width - 90}px;
  background-color: rgba(0, 0, 0, 0.10);
  border: 1px solid #000000;
`
/*--------------------------------------------------------------------------------------*/
const Send_Button = styled.TouchableOpacity`
  position: absolute;
  right: 9px;
  height: 21px;
  width: 63px;
  border-radius: 6px;
  background-color: #000000;
  border: 2px solid #000000;
`
const Send_Title = styled.Text`
  text-align: center;
  font-family: serif;
  font-size: 13px;
  color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Poster_6Comment_Input = () => {
    const width = Dimensions.get('window').width;

    return (
        <Container>
            <TextInput width={width}/>
            <Send_Button width={width}>
                <Send_Title>댓글달기</Send_Title>
            </Send_Button>
        </Container>
    )
}
export default Poster_6Comment_Input;