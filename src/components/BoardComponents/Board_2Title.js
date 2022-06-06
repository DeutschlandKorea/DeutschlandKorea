import React from "react";
import styled from "styled-components/native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  justify-content: flex-end;
  height: ${props => props.height}px;
  background-color: lightsteelblue;
`
/*--------------------------------------------------------------------------------------*/
const TitleContainer = styled.View`
  margin: 0 2px 0 18px;
`
const Title = styled.Text`
  font-family: serif;
  font-size: 36px;
  text-align: left;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Board_2Title = ({height}) => {
    return (
        <Container height={height}>
            <TitleContainer>
                <Title>벼룩시장 게시판</Title>
            </TitleContainer>
        </Container>
    )
}

export default Board_2Title;