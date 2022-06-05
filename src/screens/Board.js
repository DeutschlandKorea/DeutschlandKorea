import React from "react";
import styled from "styled-components/native";
import Board_NavigationBar from "../components/Board_NavigationBar";
import Board_UnderBarComponent from "../components/Board_UnderBarComponent";
import Board_Content from "../components/Board_Content";

const Container = styled.SafeAreaView`
  flex: 1;
`;



const Board = () => {
    return(
        <Container>
            <Board_NavigationBar/>
            <Board_Content/>
            <Board_UnderBarComponent/>
        </Container>
    )
}




export default Board;