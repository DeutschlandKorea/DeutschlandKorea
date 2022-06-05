import React from "react";
import styled from "styled-components/native";
import {Images} from "../utils/Images";

const Container = styled.View`
  height: 51px;
  background-color: gray;
  flexWrap: wrap;
  justify-content: space-between;
  flex-direction: row;
`;

const ListIcon = styled.TouchableOpacity`
  height: 51px;
  justify-content: center;
  background-color: tomato;
`;

const Icon = styled.Image`
  height: 22px;
  width: 41px;
  margin: 10px;
  background-color: aqua;
`;

const Title = styled.View`
  justify-self: center;
  flex: 1;
  align-self: center;
  background-color: tomato;
`;

const TitleText = styled.Text`
  text-align: center;
  font-size: 32px;
  letter-spacing: -0.41px;
  color: #000000;
`;


const Board_NavigationBar = () => {
    return(
        <Container>
            <ListIcon>
                <Icon source={Images.NavigationBarIcon}/>
            </ListIcon>
            <Title>
                <TitleText>앱 이름</TitleText>
            </Title>
        </Container>
    )
}

export default Board_NavigationBar;