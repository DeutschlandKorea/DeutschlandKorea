import React, {useLayoutEffect} from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import {StatusBar} from "react-native";
import Poster_5Comment from "./Poster/Poster_5Comment";
import Poster_7UnderBar from "./Poster/Poster_7UnderBar";
import Poster_6Comment_Input from "./Poster/Poster_6Comment_Input";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Poster_7UnderBar_job from "./Poster/Poster_7UnderBar_job";
import Poster_7UnderBar_info from "./Poster/Poster_7UnderBar_info";

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
const ContentText = styled.Text`
  min-height: ${props => props.height}px;

  font-size: 15px;
  text-align: left;
  color: rgba(60, 60, 60, 0.50);
`
/*--------------------------------------Poster_5Comment------------------------------------------------*/
const CommentContainer = styled.View`
  height: ${props => props.height}px;
  border-top-width: 0.5px;
  border-top-color: #000000;

  border-bottom-width: 1px;
  border-bottom-color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const _validUnderBar = ({route, navigation}) => {
    if (route.params.TitleText === '구인구직 게시판') {
        return <Poster_7UnderBar_job navigation={navigation} height={propHeight.Poster_7UnderBar}/>
    } else if (route.params.TitleText === '정보제공 게시판') {
        return <Poster_7UnderBar_info navigation={navigation} height={propHeight.Poster_7UnderBar}/>
    }  else {
        return <Poster_7UnderBar navigation={navigation} height={propHeight.Poster_7UnderBar}/>
    }
   
}
const Poster = ({navigation, route}) => {
useLayoutEffect(()=>{
    navigation.setOptions({
        headerTitle: route.params.TitleText,
    })
},[]);
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

                    <ContentText height={propHeight.Poster_4Content}>
                        {route.params.content}
                    </ContentText>

                    <CommentContainer height={propHeight.Poster_5Comment}>
                        <Poster_5Comment route={route}/>
                    </CommentContainer>

                    <Poster_6Comment_Input height={propHeight.Poster_6Comment_Input}/>

                </KeyboardAwareScrollView>

                {_validUnderBar({route, navigation})}


            </Container>
        )

}
export default Poster;