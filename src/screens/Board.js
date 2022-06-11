import React from "react";
import styled from "styled-components/native";
import Board_1NavigationBar from "./Board/Board_1NavigationBar";
import Board_4UnderBarComponent from "./Board/Board_4UnderBarComponent";
import Board_3Content from "./Board/Board_3Content";
import Board_2Title from "./Board/Board_2Title";
import {panelHeight} from "../theme";
import {StatusBar} from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const propHeight = panelHeight;
const Board = ({navigation}) => {
    return(
        <Container>
            <StatusBar/>
            <Board_1NavigationBar height={propHeight.Board_1NavigationBar}/>
            <Board_2Title height={propHeight.Board_2Title}/>
            <Board_3Content height={propHeight.Board_3Content}/>
            <Board_4UnderBarComponent height={propHeight.Board_4UnderBarComponent} navigation={navigation}/>
        </Container>
    )
}
export default Board;