import React from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import {StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Posting_1Navigation from "../components/PostingComponents/Posting_1NavigationBar";
import Posting_2TextInput from "../components/PostingComponents/Posting_2TextInput";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const propHeight = panelHeight;
const Posting = ({navigation}) => {
    return(
        <Container>
            <StatusBar/>
            <KeyboardAwareScrollView>
                <Posting_1Navigation height={propHeight.Posting_1Navigation}/>
                <Posting_2TextInput height={propHeight.Posting_2TextInput}/>
            </KeyboardAwareScrollView>
        </Container>
    )
}
export default Posting;