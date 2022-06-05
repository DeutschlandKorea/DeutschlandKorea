import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  height: ${props => props.height}px;
  padding: 0 10px 0 10px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
  background-color: powderblue;
`
const UnderButton = styled.TouchableOpacity`
  height: 54px;
  width: 139px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #000000;
  background-color: #000000;
`
const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  /* Positioning */
  /* Display & Box Model */
  /* Color */
  /* Text */
  /* Other */
`

const Board_4UnderBarComponent = ({height}) => {
    return (
        <Container height={height}>
            <UnderButton>
                <ButtonTitle>게시물 작성</ButtonTitle>
            </UnderButton>
            <UnderButton>
                <ButtonTitle>검색하기</ButtonTitle>
            </UnderButton>
        </Container>
    )
}

export default Board_4UnderBarComponent;