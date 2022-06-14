import React from "react";
import styled from "styled-components/native";
import {Button, ButtonTitle} from "../../components/Button";
/*--------------------------------------------------------------------------------------*/
const UnderBar = styled.View`
  height: 81px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Poster_7UnderBar = ({height}) => {
    return (
        <UnderBar height={height}>
            <Button>
                <ButtonTitle>신고하기</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle>좋아요</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle>채팅</ButtonTitle>
            </Button>
        </UnderBar>
    )
}
export default Poster_7UnderBar;
