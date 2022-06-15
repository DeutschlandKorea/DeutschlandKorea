import React from "react";
import styled from "styled-components/native";
import {panelHeight, PosterSample} from "../theme";
import {StatusBar} from "react-native";
import Poster_5Comment from "./Poster/Poster_5Comment";
import Poster_7UnderBar from "./Poster/Poster_7UnderBar";
import Poster_6Comment_Input from "./Poster/Poster_6Comment_Input";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const propHeight = panelHeight;

const Container = styled.SafeAreaView`
  flex: 1;
`
/*-------------------------------Poster_2Title----------------------------------------------------*/
const TitleContainer = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
`
const TitleText = styled.Text`
  height: 23px;
  margin-left: 10px;

  text-align: left;
  font-size: 20px;
  color: #000000;
`
/*-------------------------------Poster_3Information-------------------------------------------------*/
const InfoContainer = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
  border-top-width: 1px;
  border-bottom-width: 1px;
`
const InfoText = styled.Text`
  height: 22px;
  width: 329px;
  margin-left: 10px;

  font-size: 15px;
  max-width: 320px;
  text-align: left;
  letter-spacing: -0.33px;
  color: rgba(60, 60, 60, 0.50);
`
/*--------------------------------------Poster_4Content------------------------------------------------*/
const ContentContainer = styled.ScrollView`
  height: ${props => props.height}px;
  border-bottom-width: 0.5px;
`
const ContentText = styled.Text`
  font-size: 15px;
  text-align: left;
  color: rgba(60, 60, 60, 0.50);
`
/*--------------------------------------Poster_5Comment------------------------------------------------*/
const CommentContainer = styled.View`
  height: ${props => props.height}px;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Poster = ({navigation, route}) => {
    return (
        <Container>

            <StatusBar/>

            <KeyboardAwareScrollView>

                <TitleContainer height={propHeight.Poster_2Title}>
                    <TitleText>{route.params.title}</TitleText>
                </TitleContainer>

                <InfoContainer height={propHeight.Poster_3Information}>
                    <InfoText>• 게시물 정보 : {route.params.postInfo}</InfoText>
                    <InfoText>• 게시물 게시일 : {route.params.uploadTime}</InfoText>
                    <InfoText>• 게시물 작성자 : {route.params.user_name}</InfoText>
                </InfoContainer>

                <ContentContainer height={propHeight.Poster_4Content}>
                    <ContentText>
                        {route.params.content}
                    </ContentText>
                </ContentContainer>

                <CommentContainer height={propHeight.Poster_5Comment}>
                    <Poster_5Comment route={route}/>
                </CommentContainer>

                <Poster_6Comment_Input height={propHeight.Poster_6Comment_Input}/>

            </KeyboardAwareScrollView>

            <Poster_7UnderBar height={propHeight.Poster_7UnderBar}/>

        </Container>
    )
}
export default Poster;