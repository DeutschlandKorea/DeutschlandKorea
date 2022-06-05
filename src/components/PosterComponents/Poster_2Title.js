import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: ${props => props.height}px;
  background-color: aliceblue;
  justify-content: center;
`
const Title = styled.View`
  height: 23px;
  margin-left: 10px;
`
const TitleText = styled.Text`
  text-align: left;
  font-family: serif;
  font-size: 20px;
  color: #000000;
`

const Poster_2Title = ({height}) => {
    return (
        <Container height={height}>
            <Title>
                <TitleText>게시물 제목</TitleText>
            </Title>
        </Container>
    )
}

export default Poster_2Title;