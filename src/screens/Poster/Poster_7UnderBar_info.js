import React from "react";
import styled from "styled-components/native";
import {Button, ButtonTitle} from "../../components/Button";
/*--------------------------------------------------------------------------------------*/
const UnderBar = styled.View`
  height: 81px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #000000;
  background-color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Poster_7UnderBar_info = ({height}) => {
    const _onHandleCall = () => {console.log(`신고하기`);}
    const _onHandleLike = () => {console.log(`좋아요`);}

    return (
        <UnderBar height={height}>
            <Button width={139} onPress={_onHandleCall}>
                <ButtonTitle>신고하기</ButtonTitle>
            </Button>
            <Button width={139} onPress={_onHandleLike}>
                <ButtonTitle>좋아요</ButtonTitle>
            </Button>
        </UnderBar>
    )
}
export default Poster_7UnderBar_info;
