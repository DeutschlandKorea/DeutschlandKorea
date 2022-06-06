import React from "react";
import styled from "styled-components/native";
import {Dimensions} from "react-native";
import {Button, ButtonTitle} from "../Button";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 31px;
  padding: 0 9px 0 9px;
  border-bottom-width: 1px;
  border-color: #000000;
  background-color: lightsteelblue;
`
/*--------------------------------------------------------------------------------------*/
const TextInput = styled.TextInput`
  height: 22px;
  width: ${props => props.width - 90}px;
  border: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0.10);
`
/*--------------------------------------------------------------------------------------*/
/*const Send_Button = styled.TouchableOpacity`
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
`*/
/*--------------------------------------------------------------------------------------*/
const Poster_6Comment_Input = () => {
    const width = Dimensions.get('window').width;
    return (
        <Container>
            <TextInput width={width}/>
            <Button height={21} width={63}>
                <ButtonTitle fontSize={13}>댓글달기</ButtonTitle>
            </Button>
        </Container>
    )
}
export default Poster_6Comment_Input;