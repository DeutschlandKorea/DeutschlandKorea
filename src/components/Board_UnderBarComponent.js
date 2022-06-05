import React from "react";
import styled from "styled-components/native";

const UnderBar = styled.View`
  align-items: center;
  height: 83px;
  border: 1px solid #000000;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`
const UnderButton = styled.TouchableOpacity`
  height: 54px;
  width: 139px;
  justify-content: center;
  border-radius: 6px;
  background-color: #000000;
  border: 2px solid #000000;
`
const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
`

const  Board_UnderBarComponent = () => {
    return (
        <UnderBar>
            <UnderButton>
                <ButtonTitle>검색하기</ButtonTitle>
            </UnderButton>
            <UnderButton>
                <ButtonTitle>게시물 작성</ButtonTitle>
            </UnderButton>
        </UnderBar>
    )
}

export default Board_UnderBarComponent;