import React from "react";
import styled from "styled-components/native";
import Board_1NavigationBar from "../components/Board_1NavigationBar";
import Board_4UnderBarComponent from "../components/Board_4UnderBarComponent";
import Board_3Content from "../components/Board_3Content";
import Board_2Title from "../components/Board_2Title";
import {display} from "../theme";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const propHeight = display;
const Board = () => {
    return(
        <Container>
            <Board_1NavigationBar height={propHeight.Board_1NavigationBar}/>
            <Board_2Title height={propHeight.Board_2Title}/>
            <Board_3Content height={propHeight.Board_3Content}/>
            <Board_4UnderBarComponent height={propHeight.Board_4UnderBarComponent}/>
        </Container>
    )
}


export default Board;