import React from "react";
import styled from "styled-components/native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  height: 81px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: mediumspringgreen;
`
/*--------------------------------------------------------------------------------------*/
const Button = styled.TouchableOpacity`
  border-radius: 6px;
  height: 54px;
  width: 90px;
  justify-content: center;
  align-content: center;
  background-color: #000000;
  border: 2px solid #000000;
`
const ButtonTitle = styled.Text`
  text-align: center;
  font-family: serif;
  font-size: 20px;
  color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Poster_7UnderBar = ({height}) => {
    return (
        <Container height={height}>
            <Button>
                <ButtonTitle>신고하기</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle>좋아요</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle>채팅</ButtonTitle>
            </Button>
        </Container>
    )
}
export default Poster_7UnderBar;

