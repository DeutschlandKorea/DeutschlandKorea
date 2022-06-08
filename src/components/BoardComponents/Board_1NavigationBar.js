import React from "react";
import styled from "styled-components/native";
import {Images} from "../../utils/Images";
import {Dimensions} from "react-native";
import {Icon, IconButton} from "../Button";

const Container = styled.View`
  height: ${props => props.height}px;
  justify-content: center;
  background-color: gray;
`
const Title = styled.View`
  position: absolute;
  justify-self: center;
  align-self: center;
`
const TitleText = styled.Text`
  text-align: center;
  font-size: 32px;
  letter-spacing: -0.41px;
  color: #000000;
`
const Board_1NavigationBar = ({height}) => {
    const width = Dimensions.get('window').width;
    return(
        <Container height={height}>
            <IconButton height={height}>
                <Icon source={Images.NavigationBarIcon} resizeMode="contain"/>
            </IconButton>
            <Title width={width}>
                <TitleText>앱 이름</TitleText>
            </Title>
        </Container>
    )
}
export default Board_1NavigationBar;