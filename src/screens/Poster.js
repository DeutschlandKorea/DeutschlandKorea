import React from "react";
import styled from "styled-components/native";
import {display} from "../theme";
import {StatusBar} from "react-native";
import Poster_1Navigation from "../components/PosterComponents/Poster_1NavigationBar";
import Poster_2Title from "../components/PosterComponents/Poster_2Title";
import Poster_3Information from "../components/PosterComponents/Poster_3Information";
import Poster_4Content from "../components/PosterComponents/Poster_4Content";
import Poster_5Comment from "../components/PosterComponents/Poster_5Comment";
import Poster_6Comment_Input from "../components/PosterComponents/Poster_6Comment_Input";
import Poster_7UnderBar from "../components/PosterComponents/Poster_7UnderBar";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const propHeight = display;
const Poster = () => {
    return(
        <Container>
            <StatusBar/>
            <Poster_1Navigation height={propHeight.Poster_1Navigation}/>
            <Poster_2Title height={propHeight.Poster_2Title}/>
            <Poster_3Information height={propHeight.Poster_3Information}/>
            <Poster_4Content height={propHeight.Poster_4Content}/>
            <Poster_5Comment height={propHeight.Poster_5Comment}/>
            <Poster_6Comment_Input height={propHeight.Poster_6Comment_Input}/>
            <Poster_7UnderBar height={propHeight.Poster_7UnderBar}/>
        </Container>
    )
}
export default Poster;