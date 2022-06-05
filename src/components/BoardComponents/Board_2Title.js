import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: flex-end;
  height: ${props => props.height}px;
  background-color: lightsteelblue;
`
const TitleFrame = styled.View`
  margin: 0 2px 0 18px;
`
const BoardTitle = styled.Text`
  text-align: left;
  font-family: serif;
  font-size: 36px;
  color: #000000;
`
const Board_2Title = ({height}) => {
    return (
        <Container height={height}>
            <TitleFrame>
                <BoardTitle>벼룩시장 게시판</BoardTitle>
            </TitleFrame>
        </Container>
    )
}

export default Board_2Title;