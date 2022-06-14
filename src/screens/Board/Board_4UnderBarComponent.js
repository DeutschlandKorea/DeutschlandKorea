import React from "react";
import styled from "styled-components/native";
import {Button, ButtonTitle} from "../../components/Button";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  flex-direction: row;
  height: ${props => props.height}px;
  padding: 0 15px 0 15px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
  background-color: #E5E5E5;
`
/*--------------------------------------------------------------------------------------*/
const Board_4UnderBarComponent = ({height, navigation}) => {
    const _onHandlePoster = () => {navigation.navigate("Poster");}
    const _onHandlePosting = () => {navigation.navigate("Posting");}

    return (
        <Container height={height}>
            <Button width={139} onPress={_onHandlePoster}>
                <ButtonTitle>게시물 작성</ButtonTitle>
            </Button>
            <Button width={139} onPress={_onHandlePosting}>
                <ButtonTitle>검색하기</ButtonTitle>
            </Button>
        </Container>
    )
}
export default Board_4UnderBarComponent;