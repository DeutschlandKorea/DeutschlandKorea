import React from "react";
import styled from "styled-components/native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
  border-top-width: 1px;
  border-bottom-width: 1px;
`
/*--------------------------------------------------------------------------------------*/
const Title = styled.View`
  height: 22px;
  width: 329px;
  margin-left: 10px;
`
const TitleText = styled.Text`
  font-family: serif;
  font-size: 15px;
  max-width: 320px;
  text-align: left;
  letter-spacing: -0.33px;
  color: rgba(60, 60, 60, 0.50);
`
/*--------------------------------------------------------------------------------------*/
const Poster_3Information = ({height}) => {
    return (
        <Container height={height}>
            <Title>
                <TitleText>• 게시물 정보 : #구인구직 #IT #Berlin #start-up</TitleText>
            </Title>
            <Title>
                <TitleText>• 게시물 게시일 : 2014년 5월 5일</TitleText>
            </Title>
            <Title>
                <TitleText>• 게시물 작성자 : KunYoung</TitleText>
            </Title>
        </Container>
    )
}
export default Poster_3Information;