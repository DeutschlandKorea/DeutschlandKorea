import React from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import {StatusBar} from "react-native";
import Poster_2Title from "./Poster/Poster_2Title";
import Poster_3Information from "./Poster/Poster_3Information";
import Poster_4Content from "./Poster/Poster_4Content";
import Poster_5Comment from "./Poster/Poster_5Comment";
import Poster_7UnderBar from "./Poster/Poster_7UnderBar";
import Poster_6Comment_Input from "./Poster/Poster_6Comment_Input";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Container = styled.SafeAreaView`
  flex: 1;
`;
const propHeight = panelHeight;
const Poster = ({navigation}) => {
    return(
        <Container>
            <StatusBar/>
            <KeyboardAwareScrollView>
                <Poster_2Title height={propHeight.Poster_2Title}/>
                <Poster_3Information height={propHeight.Poster_3Information}/>
                <Poster_4Content height={propHeight.Poster_4Content}/>

                <Poster_5Comment height={propHeight.Poster_5Comment}/>
                <Poster_6Comment_Input height={propHeight.Poster_6Comment_Input}/>
            </KeyboardAwareScrollView>
            <Poster_7UnderBar height={propHeight.Poster_7UnderBar}/>
        </Container>
    )
}
export default Poster;