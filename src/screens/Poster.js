import React from "react";
import styled from "styled-components/native";
import {display} from "../theme";
import {StatusBar} from "react-native";
import Poster_1Navigation from "../components/PosterComponents/Poster_1NavigationBar";
import Poster_2Title from "../components/PosterComponents/Poster_2Title";
import Poster_3Imformation from "../components/PosterComponents/Poster_3Information";

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
            <Poster_3Imformation height={propHeight.Poster_3Information}/>
        </Container>
    )
}

export default Poster;