import React from "react";
import styled from "styled-components/native";
import {panelHeight} from "../theme";
import {Button, ButtonTitle, Icon, IconButton} from "../components/Button";
import {Images} from "../utils/Images";
import Board_3List from "./Board/Board_3List";
import Search from "./Search";
import { StatusBar} from "react-native";

const propHeight = panelHeight;
const Container = styled.SafeAreaView`
  flex: 1;
`
/*-----------------------------------Board_1NavigationBar---------------------------------------------------*/
const Board_1NavigationBar = styled.View`
  height: ${props => props.height}px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(27.1828px);
  background: #FFFFFF;
`
const AppName = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 23px;
  letter-spacing: -0.41px;
  color: #000000;
`
/*-----------------------------------------Board_2Title---------------------------------------------*/
const Board_2NameContainer = styled.View`
  justify-content: flex-end;
  height: ${props => props.height}px;
`
const BoardName = styled.Text`
  margin: 0 2px 0 18px;
  text-align: left;
  font-size: 36px;
  color: #000000;
`
/*---------------------------------------Board_4UnderBarComponent-----------------------------------------------*/
const Board_4UnderBarContainer = styled.View`
  flex-direction: row;
  height: ${props => props.height}px;
  padding: 0 15px 0 15px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
const Board = ({navigation, route}) => {
    const _onHandlePosting = () => {navigation.navigate("Posting",{TitleText:route.params.TitleText});}
    const _onHandleMenu = () => {navigation.navigate("Menu");}
    const _onHandleSearch = () => {navigation.navigate("Search");}

    return (
        <Container>
            <StatusBar/>
            <Board_1NavigationBar height={propHeight.Board_1NavigationBar}>
                <IconButton height={propHeight.Board_1NavigationBar} onPress={_onHandleMenu}>
                    <Icon source={Images.NavigationBarIcon} resizeMode="contain"/>
                </IconButton>
                <AppName>Deutschland Korea</AppName>
            </Board_1NavigationBar>

            <Board_2NameContainer height={propHeight.Board_2Title}>
                <BoardName>{route.params.TitleText}</BoardName>
            </Board_2NameContainer>

            <Board_3List height={propHeight.Board_3Content} navigation={navigation} route={route}/>

            <Board_4UnderBarContainer height={propHeight.Board_4UnderBarComponent}>
                <Button width={139} onPress={_onHandlePosting}>
                    <ButtonTitle>게시물 작성</ButtonTitle>
                </Button>
                <Button width={139} onPress={_onHandleSearch}>
                    <ButtonTitle>검색하기</ButtonTitle>
                </Button>

            </Board_4UnderBarContainer>

        </Container>
    )
}

export default Board;