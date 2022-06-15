import React from "react";
import styled from "styled-components/native";
import {Button, ButtonTitle} from "../../components/Button";
/*--------------------------------------------------------------------------------------*/
const UnderBar = styled.View`
  height: 81px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #000000;
  background-color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Poster_7UnderBar_job = ({height, navigation}) => {
    const _onHandleCall = () => {console.log(`신고하기`);}
    const _onHandleLike = () => {console.log(`좋아요`);}
    const _onHandleApply = () => {navigation.navigate("Potolio");}

    return (
        <UnderBar height={height}>
            <Button>
                <ButtonTitle onPress={_onHandleCall}>신고하기</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle onPress={_onHandleLike}>좋아요</ButtonTitle>
            </Button>
            <Button onPress={_onHandleApply}>
                <ButtonTitle>지원하기</ButtonTitle>
            </Button>
        </UnderBar>
    )
}
export default Poster_7UnderBar_job;
