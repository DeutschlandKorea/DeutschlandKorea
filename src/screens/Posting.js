import React, {useState} from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import {AsyncStorage, StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Posting_2TextInput from "../components/PostingComponents/Posting_2TextInput";
import {Button, ButtonTitle} from "../components/Button";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`
const TitleInputContainer = styled.SafeAreaView`
  margin-top: ${props => props.marginTop}px;
  align-items: center;
`
const ImageButtonContainer = styled.View`
  margin: 4px;
`
const ButtonContainer = styled.View`
  flex-direction: row;
  width: 183px;
  justify-content: space-between;
  margin-top: ${props => props.marginTop}px;
`
const propHeight = panelHeight;
const Posting = ({navigation}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [tasks, setTasks] = useState({});
    const _onBlur = () => {setNewTitle('');};
    const _handleTextChange = text => {setNewTitle(text);};
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTitle, completed: false },
        };
        setNewTitle('');
    };
    return(
        <Container>
            <StatusBar/>
            <KeyboardAwareScrollView>
                <TitleInputContainer marginTop={23}>
                    <Posting_2TextInput
                        height={propHeight.Posting_2TextInput}
                        placeholder={"Title"}
                        value={newTitle}
                        onChangeText={_handleTextChange}
                        onSubmitEditing={_addTask}
                        onBlur={_onBlur}
                    />
                </TitleInputContainer>

                <TitleInputContainer marginTop={9}>
                    <Posting_2TextInput
                        height={propHeight.Posting_3ContentTextInput}
                        placeholder={"내용"}
                        value={newContent}
                        onChangeText={_handleTextChange}
                        onSubmitEditing={_addTask}
                        onBlur={_onBlur}
                    />
                </TitleInputContainer>

                <ImageButtonContainer>

                    <Button height={29} width={86}>
                        <ButtonTitle fontSize={13}>이미지 업로드</ButtonTitle>
                    </Button>

                </ImageButtonContainer>

                <TitleInputContainer marginTop={0}>
                    <Posting_2TextInput
                        height={propHeight.Posting_5ImageInput}
                        placeholder={"이미지 등록 창"}
                        value={newTitle}
                        onChangeText={_handleTextChange}
                        onSubmitEditing={_addTask}
                        onBlur={_onBlur}
                    />
                </TitleInputContainer>

                <ButtonContainer marginTop={20}>

                    <Button width={86} height={29}>
                        <ButtonTitle fontSize={13}>게시하기</ButtonTitle>
                    </Button>

                    <Button width={86} height={29}>
                        <ButtonTitle fontSize={13}>취소하기</ButtonTitle>
                    </Button>

                </ButtonContainer>

            </KeyboardAwareScrollView>
        </Container>
    )
}
TitleInputContainer.defaultProps = {
    marginTop: 20,
}

export default Posting;