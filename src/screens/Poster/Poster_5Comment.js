import React from "react";
import styled from "styled-components/native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  height: ${props => props.height}px;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Content_Container = styled.View`
  height: 35px;
  border-bottom-width: 1px;
  border-bottom-color: #c4c4c4;
`
/*--------------------------------------------------------------------------------------*/
const Name_Container = styled.View`
  position: absolute;
  top: 2px;
  left: 3px;
  height: 8px;
  width: 130px;
  justify-content: center;
`
const Name_Title = styled.Text`
  max-width: 130px;
  text-align: left;
  font-size: 7px;
  line-height: 7px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Date_Container = styled.View`
  position: absolute;
  top: 2px;
  right: 3px;
  justify-content: center;
  align-items: flex-end;
  height: 8px;
  width: 80px;
`
const Date_Title = styled.Text`
  font-size: 7px;
  line-height: 7px;
  text-align: left;
  max-width: 80px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Comment_Container = styled.View`
  position: absolute;
  left: 10px;
  bottom: 5px;
  height: 15px;
`
const Comment_Title = styled.Text`
  font-size: 13px;
  line-height: 13px;
  text-align: left;
  max-width: 365px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Poster_5Comment = ({height}) => {
    return (
        <Container height={height}>
            <Content_Container>
                <Name_Container>
                    <Name_Title>Ryan Gosling</Name_Title>
                </Name_Container>
                <Date_Container>
                    <Date_Title>2019.04.26  07:04:32</Date_Title>
                </Date_Container>
                <Comment_Container>
                    <Comment_Title>Thanks you! That was very helpful!</Comment_Title>
                </Comment_Container>
            </Content_Container>
        </Container>
    )
}
export default Poster_5Comment;

