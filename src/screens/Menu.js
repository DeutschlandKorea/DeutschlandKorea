import React from "react";
import styled from "styled-components/native";
import {StatusBar, useWindowDimensions} from "react-native";
import {Button, ButtonTitle} from "../components/Button";

const Container = styled.SafeAreaView`
  flex: 1;
`
const Menu_1Title = styled.Text`
  margin-top: 44px;
  padding-left: 21px;
  width: ${props=> props.width}px;
  height: 51px;
  font-size: 36px;
  align-items: center;
`
const Menu_2ButtonContainer = styled.View`
  margin-top: 49px;
  height: 206px;
  justify-content: space-between;
  align-items: center;
`
const Menu = ({navigation}) =>{
    const width = useWindowDimensions().width;
    const _onInfoHandle = () => {navigation.navigate("Board", {TitleText: "정보제공 게시판"});}
    const _onFleaHandle = () => {navigation.navigate("Board", {TitleText: "벼룩시장 게시판"});}
    const _onJobHandle = () => {navigation.navigate("Board", {TitleText: "구인구직 게시판"});}

    return (
        <Container>
            <StatusBar/>

            <Menu_1Title width={width}>Menu</Menu_1Title>

            <Menu_2ButtonContainer>
                <Button onPress={_onInfoHandle} width={width-32}>
                    <ButtonTitle>
                        정보제공 게시판
                    </ButtonTitle>
                </Button>

                <Button onPress={_onFleaHandle} width={width-32}>
                    <ButtonTitle>
                        벼룩시장 게시판
                    </ButtonTitle>
                </Button>

                <Button onPress={_onJobHandle} width={width-32}>
                    <ButtonTitle>
                        구인구직 게시판
                    </ButtonTitle>
                </Button>
                
            </Menu_2ButtonContainer>

        </Container>
    )
}

export default Menu;