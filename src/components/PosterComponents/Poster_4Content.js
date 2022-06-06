import React from "react";
import styled from "styled-components/native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  height: ${props => props.height}px;
  border-bottom-width: 0.5px;
  background-color: lavenderblush;
`
/*--------------------------------------------------------------------------------------*/
const Content = styled.Text`
  font-size: 15px;
  text-align: left;
  color: rgba(60, 60, 60, 0.50);
`
/*--------------------------------------------------------------------------------------*/
const Poster_4Content = ({height}) => {
    return (
        <Container height={height}>
            <Content>
                게시물 내용
            </Content>
        </Container>
    )
}
export default Poster_4Content;