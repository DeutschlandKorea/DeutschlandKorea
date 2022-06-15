import * as React from 'react';
import styled from "styled-components/native";
import {StyleSheet, View, Text, StatusBar, useWindowDimensions} from 'react-native';
import {Button, ButtonTitle} from "../components/Button";
import {panelHeight} from "../theme";

const propHeight = panelHeight;
const HomeContainer = styled.SafeAreaView`
  flex: 1;
  top: 45px;
  background-color: #ffffff;
`
const Main = styled.View`
  height: ${props => props.height}px;
  width : ${props => props.width}px;
  padding: 0 15px 0 15px;
  border: 1px solid #000000;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #99CCFF;
`
const ButtonContainer = styled.View`
  height: ${props => props.height}px;
  margin-top: 45px;
  justify-content: space-between;
  align-items: center;
`
const Texting = styled.View`
  position: absolute;
  bottom: 75px;
  
  height: ${props => props.height}px;
  width : ${props => props.width}px;
  padding: 0 15px 0 15px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`

const HomeScreen = ({ navigation}) => {
    const width = useWindowDimensions().width;
    const _onInfoHandle = () => {navigation.navigate("Board");}
    const _onFleaHandle = () => {navigation.navigate("Board");}
    const _onJobHandle = () => {navigation.navigate("Board");}
    return (
        <HomeContainer>
            <StatusBar/>
            <Main width={width} height={propHeight.HomeScreen_1Main}>
                <Text style={styles.textfirst}>환영합니다!!!</Text>
            </Main>

                <ButtonContainer height={propHeight.HomeScreen_2ButtonContainer}>
                    <Button onPress={_onInfoHandle} height={52} width={width-30}>
                        <ButtonTitle>
                            정보제공 게시판
                        </ButtonTitle>
                    </Button>

                    <Button onPress={_onFleaHandle} height={52} width={width-30}>
                        <ButtonTitle>
                            벼룩시장 게시판
                        </ButtonTitle>
                    </Button>

                    <Button onPress={_onJobHandle} height={52} width={width-30}>
                        <ButtonTitle>
                            구인구직 게시판
                        </ButtonTitle>
                    </Button>
                </ButtonContainer>

            <Texting width={width} height={propHeight.HomeScreen_4Texting}>
                <Text style={styles.text}>문의: 010-9312-5476</Text>
                <Text style={styles.text}>개발: 7조</Text>
                <Text style={styles.text}>강동우, 임건영, 장민우, 전민근</Text>
            </Texting>
        </HomeContainer>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textfirst: {
        fontSize:40,
        fontWeight:"600",
    },
    text: {
        fontSize:30,
        fontWeight:"600",
    }
});

export default HomeScreen;