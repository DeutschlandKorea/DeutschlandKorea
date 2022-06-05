import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: ${props => props.height}px;
  background-color: lightsteelblue;
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
            <BoardTitle>벼룩시장 게시판</BoardTitle>
        </Container>
    )
}

export default Board_2Title;