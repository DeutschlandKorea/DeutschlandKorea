import React, {useState} from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Posting_2TextInput from "../components/PostingComponents/Posting_2TextInput";
import {Button, ButtonTitle} from "../components/Button";
import {StatusBar} from "react-native";

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
const Posting = ({navigation, route}) => {
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const _handleTitleChange = title => {setNewTitle(title)}
    const _handleInputChange = content => {setNewContent(content)}
    const _onHandleTitleButton = props => {
        navigation.navigate("Board",{props, TitleText:route.params.TitleText});
    }
    const _addTask = () => {
        const ID = Date.now().toString();
        const sample_postInfo = '#구인구직';
        const sample_user_name = 'Min woo'
        const uploadTime = new Date().toLocaleString();
        const newTaskObject = {
            id: ID,
            title: newTitle,
            postInfo:sample_postInfo,
            user_name:sample_user_name,
            content:newContent,
            uploadTime:uploadTime,
        };
        _onHandleTitleButton(newTaskObject);
    };

    return(
        <Container>
            <StatusBar/>
            <KeyboardAwareScrollView>
                <TitleInputContainer marginTop={23}>
                    <Posting_2TextInput
                        height={propHeight.Posting_2TextInput}
                        onChangeText={_handleTitleChange}
                        placeholder={"Title"}
                    />
                </TitleInputContainer>

                <TitleInputContainer marginTop={9}>
                    <Posting_2TextInput
                        height={propHeight.Posting_3ContentTextInput}
                        onChangeText={_handleInputChange}
                        placeholder={"내용"}
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
                    />
                </TitleInputContainer>

                <ButtonContainer marginTop={20}>

                    <Button width={86} height={29} onPress={ _addTask}>
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